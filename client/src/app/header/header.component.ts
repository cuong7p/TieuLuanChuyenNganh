import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';
import { Product } from '../product/model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../../assets/css/bootstrap.css',
    '../../assets/css/creditly.css',
    '../../assets/css/easy-responsive-tabs.css',
    '../../assets/css/flexslider.css',
    '../../assets/css/fontawesome-all.css',
    '../../assets/css/menu.css',
    '../../assets/css/popuo-box.css',
    '../../assets/css/style.css'
  ]
})
export class HeaderComponent implements OnInit {

  listSearch: Product[] = [];
  name!: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  isLogined(){
    if (localStorage.getItem('isLogined') === null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  isAdmin(){
    if (this.authenticationService.currentUserValue.role === 'Admin')
    {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  NotisAdmin(){
    // tslint:disable-next-line:max-line-length
    if (this.authenticationService.currentUserValue.role !== 'Admin' && this.authenticationService.currentUserValue.role !== 'SPAdmin' && this.authenticationService.currentUserValue.role !== 'Shipper')
    {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  isSPAdmin(){
    if (this.authenticationService.currentUserValue.role === 'SPAdmin')
    {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  isShipper(){
    if (this.authenticationService.currentUserValue.role === 'Shipper')
    {
      return true;
    }
    return false;
  }

  getSearch = async () => {
    console.log(this.name);
    this.listSearch = await this.productService.getSearch(this.name) as Product[];
    console.log(this.listSearch);
    if (await this.productService.checkLocalStorage() === true)
    {
      localStorage.removeItem('Search');
    }
    const productSearch = JSON.parse(localStorage.getItem('Search') || '[]');
    // productSearch.push(this.listSearch);
    localStorage.setItem('Search', JSON.stringify(this.listSearch));
    this.router.navigateByUrl('/search');
  }

  public onLogout = () => {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

}

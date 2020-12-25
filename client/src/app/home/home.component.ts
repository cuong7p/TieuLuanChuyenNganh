import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { ProductService } from '../product/product.service';
import { Product } from '../product/model';
import { Router } from '@angular/router';
import { ProductDetailService } from '../product-detail/productDetail.service';
import { EventEmitterService } from '../event-emitter.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
export class HomeComponent implements OnInit {

  totalProducts = 0;
  listProduct: Product[] = [];
  detailProduct: Product[] = [];
  filterTerm!: string;
  count = 0;
  p = 1;
  public cart = new CartService();

  constructor(
    private authenticationService: AuthenticationService,
    private eventEmitterService: EventEmitterService,
    public productService: ProductService,
    public router: Router,
    public cdr: ChangeDetectorRef,
    public productDetailService: ProductDetailService) { }

  // tslint:disable-next-line:typedef
  isAdmin(){
    if (this.authenticationService.currentUserValue.role === 'Admin')
    {
      return true;
    }
    return false;
  }
  // tslint:disable-next-line:typedef
  // Count(){
  //   this.count += this.count;
  // }

  // tslint:disable-next-line:typedef
  NotisAdmin(){
    // tslint:disable-next-line:max-line-length
    if (this.authenticationService.currentUserValue.role !== 'Admin' && this.authenticationService.currentUserValue.role !== 'SPAdmin'  && this.authenticationService.currentUserValue.role !== 'Shipper')
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

  getListProduct = async () => {
    this.listProduct = await this.productService.getListProduct() as Product[];
    console.log(this.listProduct);
  }
  getProductDetail = async (id: any) => {
    this.detailProduct = await this.productDetailService.getProductDetail(id) as Product[];
    console.log(this.detailProduct);
    if (this.productDetailService.checkLocalStorage() === true)
    {
      localStorage.removeItem('productdetail');
    }
    const productdetail = JSON.parse(localStorage.getItem('productdetail') || '[]');
    productdetail.push(this.detailProduct);
    localStorage.setItem('productdetail', JSON.stringify(productdetail));
    this.router.navigateByUrl('/product-detail');
  }
  countProducts = () => {
    this.totalProducts = this.productService.getCartNum();
  }
  addProductToCart = (obj: object) => {
    this.cart.addCart(obj);
    this.totalProducts = this.productService.getCartNum();
    alert('Add Product Success');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.getListProduct();
    this.totalProducts = this.productService.getCartNum();
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((obj: object) => {
          this.addProductToCart(obj);
        });
    }
  }

}

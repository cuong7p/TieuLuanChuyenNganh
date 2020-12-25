import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListProductService } from './listProduct.service';
import { Product } from './model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: [
  '../../assets/css/bootstrap.css',
  '../../assets/css/creditly.css',
  '../../assets/css/easy-responsive-tabs.css',
  '../../assets/css/flexslider.css',
  '../../assets/css/fontawesome-all.css',
  '../../assets/css/menu.css',
  '../../assets/css/popuo-box.css',
  '../../assets/css/style.css',
  ]
})
export class ListProductComponent implements OnInit, AfterViewInit {

  totalProducts = 0;
  listProduct: Product[] = [];
  detailProduct: Product[] = [];
  filterTerm!: string;
  p = 1;
  constructor(
    public listproductService: ListProductService,
    public router: Router,
  ) { }

  getListProduct = async () => {
    this.listProduct = await this.listproductService.getListProduct() as Product[];
    console.log(this.listProduct);
  }

  getProductDetailUpdate = async (id: any) => {
    this.detailProduct = await this.listproductService.getProductDetail(id) as Product[];
    console.log(this.detailProduct);
    if (this.listproductService.checkLocalStorage() === true)
    {
      localStorage.removeItem('productdetail');
    }
    const productdetail = JSON.parse(localStorage.getItem('productdetail') || '[]');
    productdetail.push(this.detailProduct);
    localStorage.setItem('productdetail', JSON.stringify(productdetail));
    this.router.navigateByUrl('/update-product');
  }
  // tslint:disable-next-line:variable-name
  getProductDetailDelete = async (id: any) => {
    this.detailProduct = await this.listproductService.getProductDetail(id) as Product[];
    console.log(this.detailProduct);
    if (this.listproductService.checkLocalStorage() === true)
    {
      localStorage.removeItem('productdetail');
    }
    const productdetail = JSON.parse(localStorage.getItem('productdetail') || '[]');
    productdetail.push(this.detailProduct);
    localStorage.setItem('productdetail', JSON.stringify(productdetail));
    this.router.navigateByUrl('/delete-product');
  }

  ngAfterViewInit(): void {
    this.getListProduct();
  }

  ngOnInit(): void {
  }

}

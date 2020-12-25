import { Component, OnInit } from '@angular/core';
import { DeleteProductService } from './deleteProduct.serveice';
import { Product } from './model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
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
export class DeleteProductComponent implements OnInit {
  details: Product[] = [];
  detailProduct: Product[] = [];
  imgURL: any;
  constructor(
    private deleteproductservice: DeleteProductService,
    private router: Router
  ) { }

  // getProductDetail = async (id: any) => {
  //   this.detailProduct = await this.deleteproductservice.getProductDetail(id) as Product[];
  //   console.log(this.detailProduct);
  //   if (this.deleteproductservice.checkLocalStorage() === true)
  //   {
  //     localStorage.removeItem('productdetail');
  //   }
  //   const productdetail = JSON.parse(localStorage.getItem('productdetail') || '[]');
  //   productdetail.push(this.detailProduct);
  //   localStorage.setItem('productdetail', JSON.stringify(productdetail));
  // }

  ngOnInit(): void {
    this.showDetail();
    this.imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
  }

  showDetail = () => {
    this.details = this.deleteproductservice.showProductDetail() as Product[];
  }
  // tslint:disable-next-line:typedef
  urlHinhNull(p: Product) {
    if (p.urlHinh !== null)
    {
      return true;
    }
    else{
      return false;
    }
  }

  delete = (p: Product) => {
    const id = p.maSP;
    const result = this.deleteproductservice.deleteProduct(id);
    console.log(result);
    alert('Delete Product Success');
    this.router.navigateByUrl('/list-product');
  }

}

import { Component, OnInit } from '@angular/core';
import { UpdateProductService } from './updateProduct.service';
import { Product } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
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
export class UpdateProductComponent implements OnInit {

  TenSP = '';
  Mota = '';
  TenNSX = '';
  TennhomSP = '';
  DonGia!: Int32Array;
  SoLuong!: Int32Array;
  TinhTrang = '';
  urlHinh = '';

  details: Product[] = [];
  detailProduct: Product[] = [];

  public selectedFile: any;
  public event1: any;
  imgURL: any;
  receivedImage: any;
  base64Data: any;
  convertedImage: any;
  receiveProduct: any;
  // tslint:disable-next-line:typedef
  onFileChanged(event: any){
    console.log(event);
    this.selectedFile = (event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
    };
  }

  constructor(
    private updateproductservice: UpdateProductService,
    private router: Router
  ) { }

  // getProductDetail = async (id: any) => {
  //   this.detailProduct = await this.updateproductservice.getProductDetail(id) as Product[];
  //   console.log(this.detailProduct);
  //   if (this.updateproductservice.checkLocalStorage() === true)
  //   {
  //     localStorage.removeItem('productdetail');
  //   }
  //   const productdetail = JSON.parse(localStorage.getItem('productdetail') || '[]');
  //   productdetail.push(this.detailProduct);
  //   localStorage.setItem('productdetail', JSON.stringify(productdetail));
  // }

  Update = (p: Product) => {
    const product = new Product();
    product.maSP = p.maSP;
    product.soLuong = p.soLuong;
    product.tenNSX = p.tenNSX;
    product.tenSP = p.tenSP;
    product.tennhomSP = p.tennhomSP;
    product.tinhTrang = p.tinhTrang;
    if (this.imgURL !== 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png')
    {
      product.urlHinh = this.imgURL;
    }
    else
    {
      product.urlHinh = p.urlHinh;
    }
    product.mota = p.mota;
    product.donGia = p.donGia;
    const result = this.updateproductservice.updateProduct(p.maSP, product);
    console.log(result);
    alert('Update Product Success');
    this.router.navigateByUrl('/list-product');
  }

  showDetail = () => {
    this.details = this.updateproductservice.showProductDetail() as Product[];
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
  ngOnInit(): void {
    this.showDetail();
    this.imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
  }

}

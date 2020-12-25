import { Component, OnInit } from '@angular/core';
import { AddProductService } from './addProduct.services';
import { Router } from '@angular/router';
import { Product} from './model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  TenSP = '';
  Mota = '';
  TenNSX = '';
  TennhomSP = '';
  DonGia!: Int32Array;
  SoLuong!: Int32Array;
  TinhTrang = '';
  urlHinh = '';

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
  private addProductService: AddProductService,
  private router: Router,
  // tslint:disable-next-line:no-shadowed-variable
  private HttpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  onUpload(){
    const uploadData = new FormData();
    uploadData.append('urlHinh', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile.name);
    this.HttpClient.post<any>('https://localhost:44372/api/SanPhams', uploadData)
      .subscribe(
        res => {
          console.log(res);
          this.receivedImage = res;
          this.base64Data = this.receivedImage.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(this.convertedImage);
        },
        err => {
          console.log(err);
        }
      );
  }
  ngOnInit(): void {
    this.imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
  }

  // tslint:disable-next-line:typedef
  public addNewProduct = async () => {
    try{
      const product = new Product();
      product.TenSP = this.TenSP;
      product.Mota = this.Mota;
      product.SoLuong = this.SoLuong;
      product.TenNSX = this.TenNSX;
      product.TennhomSP = this.TennhomSP;
      product.TinhTrang = this.TinhTrang;
      product.DonGia = this.DonGia;
      product.urlHinh = this.imgURL;
      console.log(this.imgURL);
      // console.log(product);
      // this.onUpload();
      const result = this.addProductService.addProduct(product) as any;
      alert('Add Product Success');
      this.router.navigateByUrl('/list-product');
      // console.log(result);
      // localStorage.setItem('newProduct', JSON.stringify(result));
    }
    catch (e)
    {
      return e;
    }
  }

}

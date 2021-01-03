import { Component, OnInit } from '@angular/core';
import { AddProductService } from './addProduct.services';
import { Router } from '@angular/router';
import { Product} from './model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import firebase from 'firebase';

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

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  });

  public selectedFile: any;
  public event1: any;
  imgURL: any;
  receivedImage: any;
  base64Data: any;
  convertedImage: any;
  receiveProduct: any;
  isSubmitted!: boolean;

  constructor(
  private storage: AngularFireStorage,
  private addProductService: AddProductService,
  private router: Router,
  // tslint:disable-next-line:no-shadowed-variable
  private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.imgURL = '../../assets/images/new_image.jpg';
  }

  // tslint:disable-next-line:typedef
  onFileChanged(event: any){
    // console.log(event);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imgURL = e.target.result;
      console.log(this.imgURL);
    };
    reader.readAsDataURL(event.target.files[0]);
    this.selectedFile = (event.target.files[0]);
  }

  // tslint:disable-next-line:typedef
  onSubmit = async () => {
    // this.isSubmitted = true;
    const filePath = `storage/${this.selectedFile.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    console.log(filePath);
    const fileRef = this.storage.ref(filePath);
    console.log(fileRef);
    this.storage.upload(filePath, this.selectedFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.imgURL = url;
          console.log(this.imgURL);
          this.addNewProduct();
        });
      })
    ).subscribe();
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
      const result = await this.addProductService.addProduct(product) as any;
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

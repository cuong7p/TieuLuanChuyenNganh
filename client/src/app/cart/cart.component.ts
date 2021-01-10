import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from './cart.service';
import { Giaodich, Hoadon, Product, SanphamInHodon } from './model';
import { ProductService } from '../product/product.service';
import { AuthenticationService } from '../login/authentication.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
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
export class CartComponent implements OnInit, AfterViewInit {
  private cartService = new CartService();
  carts: Product[] = [];
  total = 0;
  tableShow = false;

  tenGD = '';
  tenCongThanhToan = '';

  tenHD = '';
  ngayXN = '';
  diachigiaohang = '';

  spinhoadon!: any;

  constructor(
    private productservice: ProductService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.showCart();
    this.total = this.cartService.sumCart();
    if (this.carts.length !== 0) {
      this.tableShow = true;
    }
  }
  showCart = () => {
    this.carts = this.cartService.showCart();
  }
  removeAllProducts = () => {
    this.carts = this.cartService.removeAll();
    this.total = 0;
    this.tableShow = false;
  }
  removeOneProduct = (id: any) => {
    this.carts = this.cartService.removeOne(id);
    this.total = this.cartService.sumCart();
    if (this.carts.length !== 0) {
      this.tableShow = true;
    }else {
      this.tableShow = false;
    }
  }

  add = async (total: any) => {
    console.log(this.tenGD, this.tenCongThanhToan);
    const giaodich = new Giaodich();
    giaodich.ngayGD = moment(giaodich.ngayGD).format('MM/DD/YYYY');
    giaodich.tenGD = this.tenHD;
    giaodich.tenCongThanhToan = 'Paypal';
    giaodich.userID = this.authenticationService.currentUserValue.userID;
    const result = await this.productservice.addGiaodich(giaodich) as any;
    console.log(result);
    console.log(this.tenHD, this.ngayXN, this.diachigiaohang);
    const hoadon = new Hoadon();
    hoadon.tenHD = this.tenHD;
    hoadon.trangthaiHD = 'Chưa xác nhận';
    hoadon.ngayXN = this.ngayXN;
    hoadon.diachigiaohang = this.diachigiaohang;
    hoadon.mGD = result.maGD;
    hoadon.tongDon = total;
    const result2 = await this.productservice.addHoadon(hoadon) as any;
    console.log(result2);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log(cart);
    const sanphaminhoadon = new SanphamInHodon();
    sanphaminhoadon.maHD = result2.maHD;
    if (cart.length > 0) {
      cart.forEach((item: any) => {
        sanphaminhoadon.maSp = item.maSP;
        sanphaminhoadon.soluong = item.quantity;
        sanphaminhoadon.donGia = item.donGia;
        this.spinhoadon = this.productservice.addSanphamInHoadon(sanphaminhoadon);
        return;
      });
    } else {
      return;
    }
    alert('Payment Success');
    this.router.navigateByUrl('/paypal');
  }
}

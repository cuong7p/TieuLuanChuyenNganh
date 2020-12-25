import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HoadonDetailService} from './hoadonDetail.service';
import { Router } from '@angular/router';
import { Hoadon } from './model';
import { Product } from './model';

@Component({
  selector: 'app-hoadon-detail',
  templateUrl: './hoadon-detail.component.html',
  styleUrls: ['../../assets/css/bootstrap.css',
  '../../assets/css/creditly.css',
  '../../assets/css/easy-responsive-tabs.css',
  '../../assets/css/flexslider.css',
  '../../assets/css/fontawesome-all.css',
  '../../assets/css/menu.css',
  '../../assets/css/popuo-box.css',
  '../../assets/css/style.css']
})
export class HoadonDetailComponent implements OnInit, AfterViewInit {

  hoadon: Hoadon[] = [];
  sanpham: Product[] = [];
  filterTerm!: string;
  p = 1;

  constructor(
    private hoadondetailservice: HoadonDetailService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showHoadon();
  }
  ngAfterViewInit(): void {
    this.showSanpham();

  }

  showHoadon = async () => {
    this.hoadon = await this.hoadondetailservice.showHoadon() as Hoadon[];
    console.log(this.hoadon);
  }

  showSanpham = async () => {
    this.sanpham = await this.hoadondetailservice.showSanpham() as Product[];
    console.log(this.sanpham);
  }

  back = () => {
    this.router.navigateByUrl('/shipper-dashboard');
  }

}

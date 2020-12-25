import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShipperDashboardService } from './shipperDashboard.service';
import { Hoadon, Giaodich, SanphamInHodon} from './model';
import { HoadonDetailService} from '../hoadon-detail/hoadonDetail.service';
import { Router } from '@angular/router';
import { EventEmitterService } from '../event-emitter.service';
import * as moment from 'moment';

@Component({
  selector: 'app-shipper-dashboard',
  templateUrl: './shipper-dashboard.component.html',
  styleUrls: ['../../assets/css/bootstrap.css',
  '../../assets/css/creditly.css',
  '../../assets/css/easy-responsive-tabs.css',
  '../../assets/css/flexslider.css',
  '../../assets/css/fontawesome-all.css',
  '../../assets/css/menu.css',
  '../../assets/css/popuo-box.css',
  '../../assets/css/style.css']
})
export class ShipperDashboardComponent implements OnInit {

  listHoadon: Hoadon[] = [];
  filterTerm!: string;
  p = 1;
  result: any;
  constructor(
    private shipperdashboardservice: ShipperDashboardService,
    private hoadondetailservice: HoadonDetailService,
    private router: Router,
    private eventEmitterService: EventEmitterService,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getlistHoadon();
    this.cdr.detectChanges();
    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((obj: any) => {
          this.getHoadonDetail(obj);
        });
    }
  }

  getlistHoadon = async () => {
    this.listHoadon = await this.shipperdashboardservice.getListHoadon();
    console.log(this.listHoadon);
  }

  XacnhanHoadon = async (hoadon: Hoadon) => {
    moment.updateLocale('en', null);
    hoadon.ngayXN = moment(new Date()).format('MM/DD/YYYY');
    console.log(hoadon.ngayXN);
    hoadon.trangthaiHD = 'Đã xác nhận';
    const Xacnhan = this.shipperdashboardservice.confirmHoadon(hoadon.maHD, hoadon);
    console.log(Xacnhan);
  }

  getHoadonDetail = async (hoadon: Hoadon) => {

    const sanphaminhoadon = await this.hoadondetailservice.getSanphamInHoadon() as SanphamInHodon[];
    console.log(sanphaminhoadon);
    if (sanphaminhoadon.length > 0)
    {
      if (await this.hoadondetailservice.checkLocalStorage2() === true)
      {
        localStorage.removeItem('sanphamhoadon');
      }
      const sanpham = JSON.parse(localStorage.getItem('sanphamhoadon') || '[]');
      sanphaminhoadon.forEach(async (el: any) => {
        if (el.maHD === hoadon.maHD){
          this.result = await this.hoadondetailservice.getProductDetail(el.maSP);
          sanpham.push(this.result);
          console.log(sanpham);
          localStorage.setItem('sanphamhoadon', JSON.stringify(sanpham));
        }
      });
    }

    const hoadondetail = await this.hoadondetailservice.getHoadonByID(hoadon.maHD) as Hoadon[];
    if (await this.hoadondetailservice.checkLocalStorage() === true)
    {
      localStorage.removeItem('hoadondetail');
    }
    const detail = JSON.parse(localStorage.getItem('hoadondetail') || '[]');
    detail.push(hoadondetail);
    localStorage.setItem('hoadondetail', JSON.stringify(detail));
    this.router.navigateByUrl('/hoadon-detail');
  }
}

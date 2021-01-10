import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ShipperDashboardService } from '../shipper-dashboard/shipperDashboard.service';
import { HoadonDetailService} from '../hoadon-detail/hoadonDetail.service';
import { Router } from '@angular/router';
import { Hoadon, Giaodich, SanphamInHodon} from './model';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
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
export class DashboardComponent implements OnInit {

  listGiaodich: Giaodich[] = [];
  listHoadon: Hoadon[] = [];
  filterTerm!: string;
  filterTerm2!: string;
  hoadondetail!: string;
  p = 1;
  constructor(
    private shipperdashboardservice: ShipperDashboardService,
    private hoadondetailservice: HoadonDetailService,
    private dashboardservice: DashboardService,
    private router: Router,
  ) { }

  getlistGiaodich = async () => {
    this.listGiaodich = await this.dashboardservice.getListGiaodich();
    console.log(this.listGiaodich);
  }
  getlistHoadon = async () => {
    this.listHoadon = await this.dashboardservice.getListHoadon();
    console.log(this.listHoadon);
  }

  XacnhanHoadon = async (hoadon: Hoadon) => {
    moment.updateLocale('en', null);
    hoadon.ngayXN = moment(new Date()).format('MM/DD/YYYY');
    console.log(hoadon.ngayXN);
    hoadon.trangthaiHD = 'Delivery';
    const Xacnhan = this.shipperdashboardservice.confirmHoadon(hoadon.maHD, hoadon);
    alert('Condition change to Delivery');
    console.log(Xacnhan);
  }

  getHoadonDetail = async (hoadon: Hoadon) => {
    const hoadondetail = await this.hoadondetailservice.getHoadonByID(hoadon.maHD) as Hoadon[];
    if (await this.hoadondetailservice.checkLocalStorage() === true)
    {
      localStorage.removeItem('hoadondetail');
    }
    const detail = JSON.parse(localStorage.getItem('hoadondetail') || '[]');
    detail.push(hoadondetail);
    localStorage.setItem('hoadondetail', JSON.stringify(detail));
  }

  getSanphamInHoadon = async (hoadon: Hoadon) => {
    this.getHoadonDetail(hoadon);
    const sanphaminhoadon = await this.hoadondetailservice.getSanphamInHoadonByID(hoadon.maHD) as SanphamInHodon[];
    if (sanphaminhoadon.length > 0)
    {
      if (await this.hoadondetailservice.checkLocalStorage2() === true)
      {
        localStorage.removeItem('sanphamhoadon');
      }
      localStorage.setItem('sanphamhoadon', JSON.stringify(sanphaminhoadon));
    }
    localStorage.setItem('hoadondetailadmin', this.hoadondetail = 'hoadondetailadmin');
    this.router.navigateByUrl('/hoadon-detail');
  }

  ngOnInit(): void {
    this.getlistGiaodich();
    this.getlistHoadon();
  }

}

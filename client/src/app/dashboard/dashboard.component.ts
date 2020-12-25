import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Hoadon, Giaodich, SanphamInHodon} from './model';

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
  p = 1;
  constructor(
    private dashboardservice: DashboardService
  ) { }

  getlistGiaodich = async () => {
    this.listGiaodich = await this.dashboardservice.getListGiaodich();
    console.log(this.listGiaodich);
  }
  getlistHoadon = async () => {
    this.listHoadon = await this.dashboardservice.getListHoadon();
    console.log(this.listHoadon);
  }

  ngOnInit(): void {
    this.getlistGiaodich();
    this.getlistHoadon();
  }

}

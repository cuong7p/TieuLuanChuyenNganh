import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthenticationService } from '../login/authentication.service';
import { Hoadon, Giaodich, SanphamInHodon} from '../dashboard/model';

@Component({
  selector: 'app-user-list-orders',
  templateUrl: './user-list-orders.component.html',
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
export class UserListOrdersComponent implements OnInit {
  listGiaodich: Giaodich[] = [];
  listHoadon: Hoadon[] = [];
  giaodich!: Giaodich;
  filterTerm!: string;
  p = 1;
  constructor(
    private dashboardservice: DashboardService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.getGiaodich();
  }

  getGiaodich = async () => {
    const id = this.authenticationService.currentUserValue.userID;
    this.listGiaodich = await this.dashboardservice.getGiaodichByUser(id) as Giaodich[];
    console.log(this.listGiaodich);
  }

  getHoadon = async () => {
    // this.giaodich = localStorage.getItem('giaodich');
  }

}

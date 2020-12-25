import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { DashvoardAminService } from './dashboardAdmin.service';
import { Router } from '@angular/router';
import { Account } from './model';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
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
export class DashboardAdminComponent implements OnInit {

  listaccount: Account[] = [];
  filterTerm!: string;
  p = 1;

  constructor(
    private authenticationService: AuthenticationService,
    private dashboardadmin: DashvoardAminService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.getaccount();
    this.getaccount();
  }

  getaccount = async () => {
    this.listaccount = await this.dashboardadmin.getAccount() as Account[];
    // const allaccount = JSON.parse(localStorage.getItem('allaccount') || '[]');
    // if (this.dashboardadmin.checkLocalStorage() === true)
    // {
    //   localStorage.removeItem('allaccount');
    // }
    // allaccount.push(this.listaccount);
    // console.log(this.listaccount);
    // localStorage.setItem('allaccount', JSON.stringify(allaccount));
    // this.showAccount();
  }

  showAccount = async () => {
    this.listaccount = await this.dashboardadmin.showAccount() as Account[];
  }

  deleteAccount = async (id: any) => {
    const result = await this.dashboardadmin.deleteAcount(id);
    console.log(result);
    alert('Delete Product Success');
    this.router.navigateByUrl('/dashboard-admin');
  }
}

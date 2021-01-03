import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { DashvoardAminService } from './dashboardAdmin.service';
import { HttpClient } from '@angular/common/http';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { Account } from './model';
import { Product } from '../product/model';

export interface Type{
  id: number;
  text: string;
}

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

  // Pie Chart
  countPhone = 0;
  countAudio = 0;
  countAPPLIANCE = 0;
  public dataset!: Product[];
  public pieChartLabels!: string[];
  public pieChartData!: number[];
  public pieChartType: ChartType = 'pie';
  chartReady = false;
  private urlAPI = 'https://localhost:44372';

  // Bar Chart
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  BarchartReady = false;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(
    private authenticationService: AuthenticationService,
    private dashboardadmin: DashvoardAminService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    // this.getaccount();
    this.getaccount();
    this.getPieChartData();
    this.getbarChartData();
  }

  // tslint:disable-next-line:typedef
  public getPieChartData = async () =>
  {
    const urlphone = `${this.urlAPI}/api/SanPhams/Phone`;
    const urlaudio = `${this.urlAPI}/api/SanPhams/Audio`;
    const urlappliance = `${this.urlAPI}/api/SanPhams/APPLIANCE`;
    const countphone = await this.http.get<any>(urlphone).toPromise();
    const countaudio = await this.http.get<any>(urlaudio).toPromise();
    const countappliance = await this.http.get<any>(urlappliance).toPromise();
    if (countphone && countaudio && countappliance) {
      this.chartReady = true;
      this.pieChartLabels = ['Phone', 'Audio', 'Appliance'];
      this.pieChartData = [Number(countphone.length), Number(countaudio.length), Number(countappliance.length)];
    }
  }

  public getbarChartData = async () => {
    const urlkhach = `${this.urlAPI}/api/Accounts/Khach`;
    const urlAdmin = `${this.urlAPI}/api/Accounts/Admin`;
    const urlShipper = `${this.urlAPI}/api/Accounts/Shipper`;
    const countkhach = await this.http.get<any>(urlkhach).toPromise();
    console.log(countkhach);
    const countAdmin = await this.http.get<any>(urlAdmin).toPromise();
    const countShipper = await this.http.get<any>(urlShipper).toPromise();
    if (countkhach && countAdmin && countShipper) {
      this.BarchartReady = true;
      this.barChartLabels = ['Account'];
      this.barChartData = [{data: [Number(countkhach.length)], label: 'Khách'},
                           {data: [Number(countAdmin.length)], label: 'Admin'},
                           {data: [Number(countShipper.length)], label: 'Shipper'}];
    }
  }

  getaccount = async () => {
    this.listaccount = await this.dashboardadmin.getAccount() as Account[];
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

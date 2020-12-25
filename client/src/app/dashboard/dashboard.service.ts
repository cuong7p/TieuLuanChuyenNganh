import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DashboardService{
    private urlAPI = 'https://localhost:44372';
    constructor(
        private http: HttpClient
    ) { }

    public getListGiaodich = async () => {
        try {
            const loginUrl = `${this.urlAPI}/api/GiaoDiches`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public getListHoadon = async () => {
        try {
            const loginUrl = `${this.urlAPI}/api/HoaDons`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

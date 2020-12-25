import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hoadon } from '../product/model';

@Injectable({
  providedIn: 'root'
})

export class ShipperDashboardService{
    private urlAPI = 'https://localhost:44372';
    constructor(
        private http: HttpClient
    ) { }

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

    public confirmHoadon = async (id: any, hoadon: Hoadon) => {
        try {
            const loginUrl = `${this.urlAPI}/api/HoaDons/${id}`;
            return await this.http.put(loginUrl, hoadon).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

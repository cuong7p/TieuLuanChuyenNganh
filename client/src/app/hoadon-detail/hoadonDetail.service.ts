import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hoadon, SanphamInHodon, Product } from '../product/model';

@Injectable({
  providedIn: 'root'
})

export class HoadonDetailService {

    hoadon = new Hoadon();
    private urlAPI = 'https://localhost:44372';
    constructor(
        private http: HttpClient
    ) { }

    public getHoadonByID = async (id: any) => {
        try {
            const loginUrl = `${this.urlAPI}/api/HoaDons/${id}`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public getProductDetail = async (id: any) => {
        try {
            const loginUrl = `${this.urlAPI}/api/Sanphams/${id}`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public getSanphamInHoadon = async () => {
        try {
            const loginUrl = `${this.urlAPI}/api/SanPhamInHoaDons`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public getSanphamInHoadonByID = async (id: any) => {
        try {
            const loginUrl = `${this.urlAPI}/api/SanPhamInHoaDons/SanphamInHoadon/${id}`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public checkLocalStorage = async () => {
        if (localStorage.getItem('hoadondetail') !== null){
            return await true;
        }
        else {
            return await false;
        }
    }
    public checkLocalStorage2 = () => {
        if (localStorage.getItem('sanphamhoadon') !== null){
            return true;
        }
        else {
            return false;
        }
    }

    public showHoadon = async () => {
        const result = JSON.parse(localStorage.getItem('hoadondetail') || '[]');
        return await result;
    }

    public showSanpham = async () => {
        const result1 = await JSON.parse(localStorage.getItem('sanphamhoadon') || '[]');
        console.log(result1);
        return await result1;
    }
}

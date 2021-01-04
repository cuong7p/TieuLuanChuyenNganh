import { Injectable } from '@angular/core';
import { Product } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hoadon, Giaodich, SanphamInHodon} from './model';

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    public listProduct: any[] = [];
    private urlAPI = 'https://localhost:44372';
    constructor(private http: HttpClient) {}

    public getListProduct = async () => {
        try {
            const loginUrl = `${this.urlAPI}/api/SanPhams`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public checkLocalStorage = async () => {
        if (localStorage.getItem('Search') !== null){
            return await true;
        }
        else {
            return await false;
        }
    }

    public showSearch = async () => {
        const result = JSON.parse(localStorage.getItem('Search') || '[]');
        return await result;
    }

    public getSearch = async (name: any) => {
        try {
            const loginUrl = `${this.urlAPI}/api/SanPhams/Search/${name}`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public getCartNum = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return cart.length;
    }

    public addGiaodich = async (giaodich: Giaodich) => {
        try {
            const loginUrl = `${this.urlAPI}/api/GiaoDiches`;
            console.log(giaodich);
            return await this.http.post(loginUrl, giaodich).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public addHoadon = async (hoadon: Hoadon) => {
        try {
            const loginUrl = `${this.urlAPI}/api/HoaDons`;
            console.log(hoadon);
            return await this.http.post(loginUrl, hoadon).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public addSanphamInHoadon = async (sanphaminhoadon: SanphamInHodon) => {
        try {
            const loginUrl = `${this.urlAPI}/api/SanPhamInHoaDons`;
            console.log(sanphaminhoadon);
            return await this.http.post(loginUrl, sanphaminhoadon).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

import { Injectable } from '@angular/core';
import { Product } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ListProductService {
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

    public checkLocalStorage = () => {
        if (localStorage.getItem('productdetail') !== null){
            return true;
        }
        else {
            return false;
        }
    }
}

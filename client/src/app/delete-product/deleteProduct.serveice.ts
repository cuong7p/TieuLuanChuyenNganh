import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../product/model';

@Injectable({
    providedIn: 'root',
})

export class DeleteProductService{
    public product!: Product;
    private urlAPI = 'https://localhost:44372';
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

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

    public showProductDetail = () => {
        const productdetail = JSON.parse(localStorage.getItem('productdetail') || '[]');
        console.log(productdetail);
        return productdetail;
    }

    public checkLocalStorage = () => {
        if (localStorage.getItem('productdetail') != null){
            return true;
        }
        else {
            return false;
        }
    }

    public deleteProduct = async (id: any) => {
        try{
            const loginUrl = `${this.urlAPI}/api/SanPhams/${id}`;
            return await this.http.delete(loginUrl).toPromise();
        }
        catch (e){
            return e;
        }
    }
}

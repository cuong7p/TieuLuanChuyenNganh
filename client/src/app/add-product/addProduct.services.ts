import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './model';

@Injectable({
    providedIn: 'root',
})

export class AddProductService {
    private urlAPI = 'https://localhost:44372';
    constructor(private http: HttpClient) { }

    public addProduct = async (product: Product) => {
        try {
            const loginUrl = `${this.urlAPI}/api/SanPhams`;
            console.log(product);
            return await this.http.post(loginUrl, product).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

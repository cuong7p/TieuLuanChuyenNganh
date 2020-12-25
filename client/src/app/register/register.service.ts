import { Injectable } from '@angular/core';
import { Account } from '../login/model';
import { User } from '../login/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class RegisterService{
    private urlAPI = 'https://localhost:44372';
    constructor(private http: HttpClient) { }

    public postuser = async (user: User) => {
        try
        {
          console.log(user);
          const loginUrl = `${this.urlAPI}/api/Users`;
          return await this.http.post(loginUrl, user).toPromise();
        }
        catch (e) {
          console.log(e);
          return e;
        }
    }

    public addAccount = async (account: Account) => {
        try {
            const loginUrl = `${this.urlAPI}/api/Accounts`;
            console.log(account);
            return await this.http.post(loginUrl, account).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public updateAccount = async (id: any, account: Account) => {
        try{
            const loginUrl = `${this.urlAPI}/api/Accounts/${id}`;
            console.log(loginUrl);
            return await this.http.put(loginUrl, account).toPromise();
        }
        catch (e){
            return e;
        }
    }

    public getaccountbyid = async (id: any) => {
        try{
          const loginUrl = `${this.urlAPI}/api/Accounts/${id}`;
          return await this.http.get(loginUrl).toPromise();
        }
        catch (e) {
          console.log(e);
          return e;
        }
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model';

@Injectable({
    providedIn: 'root',
})

export class DashvoardAminService {
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

    public getAccount = async () => {
        try {
            const loginUrl = `${this.urlAPI}/api/Accounts`;
            return await this.http.get(loginUrl).toPromise();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    public showAccount = () => {
        const allaccount = JSON.parse(localStorage.getItem('allaccount') || '[]');
        console.log(allaccount);
        return allaccount;
    }

    public checkLocalStorage = () => {
        if (localStorage.getItem('allaccount') !== null){
            return true;
        }
        else {
            return false;
        }
    }

    public deleteAcount = async (id: any) => {
        try
        {
          const loginUrl = `${this.urlAPI}/api/Users/${id}`;
          return await this.http.delete(loginUrl).toPromise();
        }
        catch (e) {
          console.log(e);
          return e;
        }
    }
}

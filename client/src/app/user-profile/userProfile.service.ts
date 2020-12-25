import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model';
@Injectable({
    providedIn: 'root',
})
export class UserProfileService{
    private urlAPI = 'https://localhost:44372';
    constructor(private http: HttpClient) { }

    public getuser = async () => {
        try{
          const loginUrl = `${this.urlAPI}/api/Users`;
          return await this.http.get(loginUrl).toPromise();
        }
        catch (e) {
          console.log(e);
          return e;
        }
    }
    public getuserbyid = async (id: any) => {
        try{
          const loginUrl = `${this.urlAPI}/api/Users/${id}`;
          return await this.http.get(loginUrl).toPromise();
        }
        catch (e) {
          console.log(e);
          return e;
        }
    }
    public showProfile = () => {
        const userdetails = JSON.parse(localStorage.getItem('user-detail') || '[]');
        console.log(userdetails);
        return userdetails;
    }
    public showProfile2 = () => {
        const accountdetails = JSON.parse(localStorage.getItem('account-detail') || '[]');
        console.log(accountdetails);
        return accountdetails;
    }
    public checkLocalStorage = () => {
        if (localStorage.getItem('user-detail') != null){
            return true;
        }
        else {
            return false;
        }
    }
    public checkLocalStorage2 = () => {
        if (localStorage.getItem('account-detail') != null){
            return true;
        }
        else {
            return false;
        }
    }
    public updateUser = async (id: any, user: User) => {
        try{
            const loginUrl = `${this.urlAPI}/api/Users/${id}`;
            return await this.http.put(loginUrl, user).toPromise();
        }
        catch (e){
            return e;
        }
    }
}

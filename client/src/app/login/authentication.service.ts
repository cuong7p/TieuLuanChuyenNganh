import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { ReturnStatement } from '@angular/compiler';

@Injectable({
    providedIn: 'root',
})

export class AuthenticationService {
    private currentAccountSubject: BehaviorSubject<Account>;
    public currentAccount: Observable<Account>;
    private urlAPI = 'https://localhost:44372';
    constructor(private http: HttpClient) {
      this.currentAccountSubject = new BehaviorSubject<Account>(
        JSON.parse(localStorage.getItem('currentAccount') || '{}'));
      this.currentAccount = this.currentAccountSubject.asObservable();
    }

    public get currentUserValue(): Account {
      return this.currentAccountSubject.value;
    }

    public login = (email: string, password: string) => {
      console.log(email);
      console.log(password);
      const loginUrl = `${this.urlAPI}/api/Accounts/Signin`;
      console.log(loginUrl);
      return this.http.post<any>(loginUrl, {email, password})
      .pipe(
          map((user) => {
            // console.log(user);
            if (user != null) {
              const newUser = {} as Account;
              newUser.accountID = user.accountID;
              newUser.email = user.email;
              newUser.password = user.password;
              newUser.userID = user.userID;
              newUser.role = user.role;
              localStorage.setItem('currentAccount', JSON.stringify(newUser));
              this.currentAccountSubject.next(newUser);
              console.log(user);
              return user;
            } else {
              return null;
            }
          })
        );
    }

    getusers = async () => {
      try {
        return await this.http.get(this.urlAPI).toPromise();
      }
      catch (e) {
        console.log(e);
        return e;
      }
    }

    getuser = async (id: any) => {
      try
      {
        const user = await this.http.get(this.urlAPI + '/Users/' + id).toPromise();
        return user;
      }
      catch (e) {
        console.log(e);
        return e;
      }
    }

    // tslint:disable-next-line:typedef-whitespace
    getAllAccount(): Observable<Account[]>{
      return this.http.get<Account[]>(this.urlAPI + 'api/Accounts').pipe();
    }
    getAccountByID(id: number): Observable<Account>{
      return this.http.get<Account>(`${this.urlAPI}/api/Accounts/${id}`).pipe();
    }

    getaccount = async (id: any) => {
      try
      {
        const account = await this.http.get(this.urlAPI + '/api/Accounts/' + id).toPromise();
        return account;
      }
      catch (e) {
        console.log(e);
        return e;
      }
    }

    public logout = () => {
      localStorage.clear();
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../login/model';
import { User} from '../login/model';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: [
  '../../assets/css/bootstrap.css',
  '../../assets/css/creditly.css',
  '../../assets/css/easy-responsive-tabs.css',
  '../../assets/css/flexslider.css',
  '../../assets/css/fontawesome-all.css',
  '../../assets/css/menu.css',
  '../../assets/css/popuo-box.css',
  '../../assets/css/style.css'
  ]
})
export class AddAdminComponent implements OnInit {

  public FirstName = '';
  public LastName = '';
  public Phone = '';
  public Address = '';
  public Email = '';
  public Password = '';
  public Role = '';

  constructor(
    private router: Router,
    private registerservice: RegisterService
  ) { }

  public createUser = async () => {
    try
    {
      console.log(this.FirstName, this.LastName, this.Phone, this.Address);
      const user = new User();
      user.FirstName = this.FirstName;
      user.LastName = this.LastName;
      user.Phone = this.Phone;
      user.Address = this.Address;
      console.log(user);
      const result = await this.registerservice.postuser(user) as any;
      console.log(result);
      localStorage.setItem('user-admin', JSON.stringify(result));
      // const userinfo = localStorage.getItem('user');
      // const saveuser = JSON.parse(userinfo || '{}');
      const account = new Account();
      account.email = this.Email;
      account.password = this.Password;
      account.role = this.Role;
      account.userID = result.userID;
      console.log(account);
      const result2 = await this.registerservice.addAccount(account) as any;
      console.log(result2);
      this.router.navigateByUrl('/dashboard-admin');
    }
    catch (e)
    {
      return e;
    }
  }

  ngOnInit(): void {
  }

}

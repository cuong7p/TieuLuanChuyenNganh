import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile/userProfile.service';
import { AuthenticationService } from '../login/authentication.service';
import { RegisterService } from '../register/register.service';
import { User } from './model';
import { Account } from '../login/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
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
export class UpdateProfileComponent implements OnInit {
  user: User[] = [];
  userdetails: User[] = [];
  account: Account[] = [];
  accountdetails: Account[] = [];
  public FirstName = '';
  public LastName = '';
  public Phone = '';
  public Address = '';
  public Email = '';
  public Password = '';
  public Role = 'Khách';

  public selectedFile: any;
  public event1: any;
  imgURL: any;
  // imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
  receivedImage: any;
  base64Data: any;
  convertedImage: any;
  receiveProduct: any;
  // tslint:disable-next-line:typedef
  onFileChanged(event: any){
    if (event.target.files && event.target.files[0]) {
      console.log(event);
      this.selectedFile = (event.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2) => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
      };
    }
    else {
      this.imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
      this.selectedFile = null;
    }
  }
  constructor(
    private userProfileService: UserProfileService,
    private authenticationService: AuthenticationService,
    private registerService: RegisterService,
    private router: Router
    ) { }
  // id!: Int32Array;
  public getUserByID = async () => {
    const id2 = this.authenticationService.currentUserValue.accountID;
    console.log(id2);
    this.account = await this.registerService.getaccountbyid(id2) as Account[];
    if (this.userProfileService.checkLocalStorage2() === true)
    {
      localStorage.removeItem('account-detail');
    }
    const accountdetails = JSON.parse(localStorage.getItem('account-detail') || '[]');
    accountdetails.push(this.account);
    localStorage.setItem('account-detail', JSON.stringify(accountdetails));
    this.showProfile();
  }
  // tslint:disable-next-line:typedef
  urlHinhNull(user: User) {
    if (user.urlHinh !== null)
    {
      return true;
    }
    else{
      return false;
    }
  }
  Update = (a: Account) => {
    const id = this.authenticationService.currentUserValue.userID;
    // console.log(this.FirstName, this.LastName, this.Phone, this.Address);
    // const user = new User();
    // user.firstName = this.FirstName;
    // user.lastName = this.LastName;
    // user.phone = this.Phone;
    // user.address = this.Address;
    // user.urlHinh = this.imgURL;
    // console.log(user);
    // const result = this.userProfileService.updateUser(id, user);
    const id2 = this.authenticationService.currentUserValue.accountID;
    console.log(this.Email, this.Password);
    const account = new Account();
    account.accountID = id2;
    account.email = a.email;
    account.password = a.password;
    account.role = this.authenticationService.currentUserValue.role;
    account.userID = id;
    console.log(account);
    const result2 = this.registerService.updateAccount(id2, account);
    console.log(result2);
    this.router.navigateByUrl('/user-profile');
    alert('Change Account Success');
  }
  showProfile = () => {
    this.accountdetails = this.userProfileService.showProfile2() as Account[];
    console.log(this.accountdetails);
    this.userdetails = this.userProfileService.showProfile() as User[];
    console.log(this.userdetails);
  }
  ngOnInit(): void {
    // this.imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
    this.getUserByID();
  }
  // tslint:disable-next-line:typedef
  isAdmin(){
    if (this.authenticationService.currentUserValue.role === 'Admin')
    {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  NotisAdmin(){
    // tslint:disable-next-line:max-line-length
    if (this.authenticationService.currentUserValue.role !== 'Admin' && this.authenticationService.currentUserValue.role !== 'SPAdmin' && this.authenticationService.currentUserValue.role !== 'Shipper')
    {
      return true;
    }
    return false;
  }

}

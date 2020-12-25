import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './userProfile.service';
import { AuthenticationService } from '../login/authentication.service';
import { RegisterService } from '../register/register.service';
import { User } from './model';
import { Account } from '../login/model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
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
export class UserProfileComponent implements OnInit {

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
  public urlHinh = '';
  public Role = 'Khách';

  public selectedFile: any;
  public event1: any;
  imgURL: any;
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
    }
  }

  constructor(
    private userProfileService: UserProfileService,
    private authenticationService: AuthenticationService,
    private registerService: RegisterService
    ) { }
  // id!: Int32Array;
  public getUserByID = async () => {
    const id = this.authenticationService.currentUserValue.userID;
    this.user = await this.userProfileService.getuserbyid(id) as User[];
    console.log(this.user);
    if (this.userProfileService.checkLocalStorage() === true)
    {
      localStorage.removeItem('user-detail');
    }
    const userdetail = JSON.parse(localStorage.getItem('user-detail') || '[]');
    userdetail.push(this.user);
    localStorage.setItem('user-detail', JSON.stringify(userdetail));
    this.showProfile();
  }
  Update = (u: User) => {
    const id = this.authenticationService.currentUserValue.userID;
    console.log(this.FirstName, this.LastName, this.Phone, this.Address);
    const user = new User();
    user.userID = id;
    user.firstName = u.firstName;
    user.lastName = u.lastName;
    user.phone = u.phone;
    user.address = u.address;
    if (this.imgURL !== 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png')
    {
      user.urlHinh = this.imgURL;
    }
    else
    {
      user.urlHinh = u.urlHinh;
    }
    console.log(user);
    const result = this.userProfileService.updateUser(id, user);
    console.log(result);
    alert('Change Profile Success');
    // const id2 = this.authenticationService.currentUserValue.accountID;
    // console.log(this.Email, this.Password);
    // const account = new Account();
    // account.email = this.Email;
    // account.password = this.Password;
    // account.role = this.authenticationService.currentUserValue.role;
    // account.userID = id;
    // console.log(account);
    // const result2 = this.registerService.updateAccount(id2, account);
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
  showProfile = () => {
    this.userdetails = this.userProfileService.showProfile() as User[];
    console.log(this.userdetails);
  }
  ngOnInit(): void {
    this.getUserByID();
    this.imgURL = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
  }

}

import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './userProfile.service';
import { AuthenticationService } from '../login/authentication.service';
import { RegisterService } from '../register/register.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from './model';
import { Account } from '../login/model';
import { finalize } from 'rxjs/operators';

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

  // tslint:disable-next-line:typedef
  onSubmit = async (u: User) => {
    // this.isSubmitted = true;
    const filePath = `storage/${this.selectedFile.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    console.log(filePath);
    const fileRef = this.storage.ref(filePath);
    console.log(fileRef);
    this.storage.upload(filePath, this.selectedFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.imgURL = url;
          console.log(this.imgURL);
          this.Update(u);
        });
      })
    ).subscribe();
  }

  constructor(
    private storage: AngularFireStorage,
    private userProfileService: UserProfileService,
    private authenticationService: AuthenticationService,
    private registerService: RegisterService
    ) { }
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

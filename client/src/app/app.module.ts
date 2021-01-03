import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/environments/environment';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalComponent } from './paypal/paypal.component';
import { OrderModule } from 'ngx-order-pipe';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { HoadonDetailComponent } from './hoadon-detail/hoadon-detail.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    DashboardComponent,
    CartComponent,
    ProductDetailComponent,
    UserProfileComponent,
    ListProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    UpdateProfileComponent,
    PaypalComponent,
    DashboardAdminComponent,
    AddAdminComponent,
    ShipperDashboardComponent,
    HoadonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path : 'header', component: HeaderComponent},
      {path : '', component: HomeComponent},
      {path : 'login', component: LoginComponent},
      {path : 'register', component: RegisterComponent},
      {path : 'add-product', component: AddProductComponent},
      {path : 'dashboard', component: DashboardComponent},
      {path : 'cart', component: CartComponent},
      {path : 'product-detail', component: ProductDetailComponent},
      {path : 'user-profile', component: UserProfileComponent},
      {path : 'update-product', component: UpdateProductComponent},
      {path : 'delete-product', component: DeleteProductComponent},
      {path : 'update-profile', component: UpdateProfileComponent},
      {path : 'list-product', component: ListProductComponent},
      {path : 'paypal', component: PaypalComponent},
      {path : 'dashboard-admin', component: DashboardAdminComponent},
      {path : 'add-admin', component: AddAdminComponent},
      {path : 'shipper-dashboard', component: ShipperDashboardComponent},
      {path : 'hoadon-detail', component: HoadonDetailComponent}
    ]),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPayPalModule,
    OrderModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

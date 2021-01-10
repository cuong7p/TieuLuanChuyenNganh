import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PaypalComponent } from './paypal/paypal.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { HoadonDetailComponent } from './hoadon-detail/hoadon-detail.component';
import { SearchComponent } from './search/search.component';
import { UserListOrdersComponent } from './user-list-orders/user-list-orders.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
   {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path : 'update-profile',
    component: UpdateProfileComponent
  },
  {
    path : 'list-product',
    component: ListProductComponent
  },
  {
    path : 'paypal',
    component: PaypalComponent
  },
  {
    path : 'dashboard-admin',
    component: DashboardAdminComponent
  },
  {
    path : 'add-admin',
    component: AddAdminComponent
  },
  {
    path : 'shipper-dashboard',
    component: ShipperDashboardComponent
  },
  {
    path : 'hoadon-detail',
    component: HoadonDetailComponent
  },
  {
    path : 'search',
    component : SearchComponent
  },
  {
    path : 'user-list-orders',
     component : UserListOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

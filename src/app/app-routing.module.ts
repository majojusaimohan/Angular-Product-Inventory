import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ViewproductsComponent } from './products/viewproducts/viewproducts.component';


const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile',component: ProfileComponent},
  {path:'addproduct',component: AddproductComponent}, {path:'addproduct/:type/:id',component: AddproductComponent}, {path:'viewproducts',component: ViewproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

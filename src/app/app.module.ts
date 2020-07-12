import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ProductService } from './products/product.service';
import { ViewproductsComponent } from './products/viewproducts/viewproducts.component';
import { FilterPipe } from './filter.pipe';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { CanDeactivateGuard } from './shared/CanComponentDeactivate.service';
import { BarchartComponent } from './barchart/barchart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    AddproductComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ViewproductsComponent,
    FilterPipe,
    ProductdetailsComponent,
    BarchartComponent
    
    
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    ChartsModule
  ],
  providers: [ProductService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

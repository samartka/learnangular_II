import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CatalogModule } from "./catalog/catalog.module";
import { HomeModule } from "./home/home.module";
import { AppRouteModule } from "./app-route/app-route.module";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackendService } from "./backend.service";
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MatButtonModule } from "@angular/material/button";
//import { ProductlistComponent } from "./catalog/productlist/productlist.component";
//import { ProductDetailComponent } from "./catalog/product-detail/product-detail.component";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,CatalogModule,HomeModule,AppRouteModule,BrowserAnimationsModule,MatButtonModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

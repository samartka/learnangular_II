import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CatalogModule } from "./catalog/catalog.module";
import { HomeModule } from "./home/home.module";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackendService } from "./backend.service";
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductlistComponent } from "./catalog/productlist/productlist.component";
import { ProductDetailComponent } from "./catalog/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'products',
  component: ProductlistComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,CatalogModule,HomeModule,RouterModule.forRoot(routes)],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

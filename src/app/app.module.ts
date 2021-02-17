import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductlistComponent,
    ProductitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

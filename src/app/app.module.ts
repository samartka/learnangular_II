import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CatalogModule } from "./catalog/catalog.module";
import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackendService } from "./backend.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,CatalogModule,HomeModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

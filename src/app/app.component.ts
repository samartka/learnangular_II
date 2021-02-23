import { Component,OnInit,ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';
import { BackendService } from "./backend.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent implements OnInit{
  constructor(private backendService:BackendService) { }
  @ViewChild('productlist', {static: true})
  productlist: ProductlistComponent;
  ngOnInit() : void {
    this.productlist.products = this.backendService.getProducts();
  }
}
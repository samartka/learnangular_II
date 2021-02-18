import { Component,OnInit,ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent implements OnInit{
  @ViewChild('productlist', {static: true})
  productlist: ProductlistComponent;
  
  ngOnInit() : void {
    this.productlist.products = [
      {name:'ส้มโอ' , price:111},
      {name:'แตงโม' , price:222},
      {name:'มะพร้าวน้ำหอม' , price:333}
    ];
  }

  // title = 'angular29-lab1';
  constructor() { 

  }

}
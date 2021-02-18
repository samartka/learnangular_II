import { Component, OnInit ,ViewChildren,QueryList} from '@angular/core';
import { Product } from '../models/product';
import {ProductitemComponent} from '../productitem/productitem.component'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @ViewChildren(ProductitemComponent)
  productitems: QueryList<ProductitemComponent>;

  products:Product[];

  constructor() {
    this.products = [];
    
    // this.products.push({name:'ข้าวเหนียว',price:200});
    // this.products.push({name:'ข้าวญี่ปุ่น',price:300});
    // this.products.push({name:'ข้าวหัก',price:100});
    // this.products.push({name:'หมูสามชั้น',price:145});
    // this.products.push({name:'IPAD',price:15000});
   }

  ngOnInit(): void {}

  selectedProduct(productComponent:ProductitemComponent){
    alert(`Product ${productComponent.Product.name} is selected`);
    this.productitems.forEach(p=>{
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}

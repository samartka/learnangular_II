import { Component, OnInit ,ViewChildren,QueryList} from '@angular/core';
import { Product } from '../../models/product';
import {ProductitemComponent} from '../productitem/productitem.component'
import { BackendService } from "../../backend.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @ViewChildren(ProductitemComponent)
  productitems: QueryList<ProductitemComponent>;

  products:Product[];

  constructor(private backendService: BackendService) {
    this.products = [];
    

   }

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }

  selectedProduct(productComponent:ProductitemComponent){
    alert(`Product ${productComponent.Product.name} is selected`);
    this.productitems.forEach(p=>{
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}

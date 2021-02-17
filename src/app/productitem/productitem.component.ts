import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';



@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input()
  Product:Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}

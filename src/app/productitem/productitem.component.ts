import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Product } from '../models/product';



@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input()
  Product:Product;

  @Output()
  onSelected : EventEmitter<Product> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  select() {
    this.onSelected.emit(this.Product);
  }
}

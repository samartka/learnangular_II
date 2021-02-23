import { Injectable } from '@angular/core';
import { Product } from "./models/product";
@Injectable({
  providedIn: 'root'
})

export class BackendService {
  constructor() { }
  getProducts(){
    return [
        {name:'ส้มโอ' , price:111},
        {name:'แตงโม' , price:222},
        {name:'มะพร้าวน้ำหอม' , price:333}
      ];
  }

  getProductById(productId:number):Product{
    return ;
  }

}

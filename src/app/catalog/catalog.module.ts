import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { PanelComponent } from './panel/panel.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { BackendService } from '../backend.service';
@NgModule({
  declarations: [ProductlistComponent, ProductitemComponent,PanelComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ],
  providers:[BackendService],
  exports:[ProductitemComponent,ProductlistComponent]
})
export class CatalogModule {}

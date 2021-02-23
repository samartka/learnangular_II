import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [ProductlistComponent, ProductitemComponent,PanelComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductitemComponent,ProductlistComponent,PanelComponent]
})
export class CatalogModule {}

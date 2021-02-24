import { NgModule } from '@angular/core' ;
import { CommonModule } from '@angular/common' ;

import { RouterModule , Routes } from '@angular/router' ;

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductlistComponent } from "../catalog/productlist/productlist.component";
import { ProductDetailComponent } from "../catalog/product-detail/product-detail.component";



const routes: Routes = [
    {
       path: 'home',
      component: HomeComponent
      },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'products',
    component: ProductlistComponent
    },
    {
      path: 'products/:id',
      component: ProductDetailComponent
    },
    {
    path: '**',
    component: PageNotFoundComponent
    }
];
@NgModule({
declarations: [],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRouteModule {}
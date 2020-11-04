import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { ProductDetailComponent } from '../app/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/products', pathMatch: 'full'},
  {path: 'products', component: ProductComponent},
  {path: 'products/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
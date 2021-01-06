import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfProductsComponent} from './containers/list-of-products/list-of-products.component';
import {ProductPageComponent} from './containers/product-page/product-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ListOfProductsComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

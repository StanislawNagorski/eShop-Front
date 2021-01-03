import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfProductsComponent} from './containers/list-of-products/list-of-products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ListOfProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../../models/product.interface';
import {ProductApiService} from '../../services/product-api.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit, OnDestroy {
  subscriptions$: Subscription;
  products$: Observable<Product[]>;

  constructor( private productApiService: ProductApiService) {}

  ngOnInit(): void {
    this.products$ = this.productApiService.getProducts();
    this.subscriptions$ = this.productApiService.getProducts()
      .pipe(take(1))
      .subscribe((productList: Product[]) => {
        console.log(productList);
      } );
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

}

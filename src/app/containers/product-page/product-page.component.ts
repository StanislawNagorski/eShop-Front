import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../models/product.interface';
import {ProductComponent} from '../../components/product/product.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  @Input() type = 'product-page';

  constructor() { }

  ngOnInit(): void {
  }

}

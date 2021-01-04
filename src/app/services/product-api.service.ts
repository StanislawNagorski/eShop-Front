import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private url = 'http://localhost:8081/products/price?order=asc';
 // private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
}

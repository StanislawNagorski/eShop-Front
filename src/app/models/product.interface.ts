import {ProductImage} from './product-image.interface';
import {ProductCategory} from './product-category.interface';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: ProductCategory;
  promo: boolean;
  promoPrice: number;
  productImages: ProductImage[];
  active: boolean;
}

// "id": 11,
//   "name": "Maska dla dzieci",
//   "description": "
//   "price": 179.99,
//   "quantity": 3,
//   "category": {
//   "id": 8,
//     "name": "maska szermiercza"
// },
// "promoPrice": null,
//   "productImages": [
//   {
//     "imageId": 11,
//     "productId": 11,
//     "imageUrl": "https://contents.mediadecathlon.com/p1910639/k$1d6200e7a799822cca9af3c5b70cb09b/sq/Maska+dla+dzieci.webp?f=1000x1000"
//   }
// ],
//   "creationTime": "2021-01-03T15:48:22.974213",
//   "updateTime": "2021-01-03T15:49:04.451915",
//   "active": false,
//   "promo": false

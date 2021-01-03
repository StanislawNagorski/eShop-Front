export interface Product {
  id: number;
  description: string;
  price: number;
  quantity: number;
  category: object;
  promo: boolean;
  promoPrice: number;
  productImages: object;
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
//   },
//   {
//     "imageId": 12,
//     "productId": 11,
//     "imageUrl": "https://contents.mediadecathlon.com/p1910636/k$e671fc7c2e1c93e85a5bb9131fff4dc9/sq/Maska+dla+dzieci.webp?f=1000x1000"
//   }
// ],
//   "creationTime": "2021-01-03T15:48:22.974213",
//   "updateTime": "2021-01-03T15:49:04.451915",
//   "active": false,
//   "promo": false

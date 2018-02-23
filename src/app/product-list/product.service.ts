import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts() {
    return [{
      productName: 'Apples',
      imageUrl: './assets/apple.png',
      inStock: true,
    }, {
      productName: 'Oranges',
      imageUrl: './assets/orange.jpeg',
      inStock: true,
    }, {
      productName: 'Ducks',
      imageUrl: './assets/ducks.jpeg',
      inStock: false,
    }];
  }
}

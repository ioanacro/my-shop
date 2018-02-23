import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  @Input() productList: Product[];
  constructor() { }

  addProduct() {
    this.productList = [...this.productList, {
      productName: 'Birds',
      imageUrl: './assets/apple.png',
      inStock: true,
    }];
  }

  ngOnInit() {
  }

}

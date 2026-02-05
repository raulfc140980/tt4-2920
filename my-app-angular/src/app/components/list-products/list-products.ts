import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-list-products',
  imports: [ProductItem],
  templateUrl: './list-products.html',
  styleUrl: './list-products.scss',
})
export class ListProducts {
  products = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 4.99 },
    { id: 3, name: 'Product C', price: 7.99 },
  ];

  sum = 0;

  onAddToCart(product: any) {
    console.log("THIS IS FROM THE PARENT LIST OF PRODUCTS!");
    console.log(product);
    this.sum += product.price;
  }
}

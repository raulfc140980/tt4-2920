import { Component } from '@angular/core';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  constructor(private cartService: CartService) {}

  addProduct() {
    this.cartService.addToCart({
      id: 1,
      name: 'Laptop',
      price: 1200,
      quantity: 1
    });
  }
}

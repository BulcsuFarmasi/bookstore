import { Component, OnInit } from '@angular/core';

import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:Cart;
  
  constructor(private cartService:CartService) { }

  ngOnInit() {
      this.cart = this.cartService.getCart();
      console.log(this.cart);
  }

  removeFromCart (book) {
    this.cart = this.cartService.removeFromCart(book);
  }

}

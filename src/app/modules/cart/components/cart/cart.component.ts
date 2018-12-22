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
  message:boolean;
  
  constructor(private cartService:CartService) { }

  ngOnInit() {
      this.cart = this.cartService.getCart();
      this.dismissMessage();
  }

  dismissMessage () {
    setTimeout(() => {
      this.message = false;
    }, 5000)
  }

  removeFromCart (book) {
    if (confirm('Are you sure to remove this book from the cart?'))
    this.cart = this.cartService.removeFromCart(book);
    this.message = true;
  }

}

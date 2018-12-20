import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { Cart } from '../models/cart';
import { Book } from '../models/book';

@Injectable()
export class CartService {

  private cart:Cart = {
    books: []
  };

  constructor(private storageService:StorageService) {}
  
  addToCart (book:Book) {
    this.cart.books.push(book);
    this.setCart();
  }

  removeFromCart (book:Book) {
    const index = this.cart.books.indexOf(book);

    this.cart.books.splice(index, 1);

    this.setCart();
  }
  
  getCart () {
    this.loadCart();
    return this.cart
  }

  private loadCart () {
    if (!this.cart) {
      this.cart = this.storageService.get('cart');
    }
  }

  private setCart () {
    this.storageService.set('cart', this.cart);
  }
}

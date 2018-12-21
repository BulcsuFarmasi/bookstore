import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { Cart } from '../models/cart';
import { Book } from '../models/book';

@Injectable()
export class CartService {

  cart:Cart;

  private key = 'cart'

  constructor(private storageService:StorageService) {
    this.loadCart();
  }
  
  addToCart (book:Book) {
    this.cart.books.push(book);
    this.setCart();
  }

  removeFromCart (book:Book) {
    const index = this.cart.books.indexOf(book);

    this.cart.books.splice(index, 1);

    this.setCart();

    return this.cart;
  }
  
  getCart () {
    this.loadCart();
    return this.cart
  }

  private loadCart () {
    if (!this.cart) {
      this.cart = this.storageService.get(this.key) || { books: [] };
    }
  }

  private setCart () {
    this.storageService.set(this.key, this.cart);
  }
}

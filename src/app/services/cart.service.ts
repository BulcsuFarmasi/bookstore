import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { Cart } from '../models/cart';
import { Book } from '../models/book';

@Injectable()
export class CartService {

  private cart:Cart;

  constructor(private storageService:StorageService) {}
  
  addToCart(book:Book) {
    this.cart.books.push(book);
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

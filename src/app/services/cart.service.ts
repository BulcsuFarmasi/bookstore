import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { Cart } from '../models/cart';

@Injectable()
export class CartService {

  private cart:Cart;

  constructor(private storageService:StorageService) {}

  loadCart () {
    if (!this.cart) {
      this.cart = this.storageService.get('cart');
    }
  }
}

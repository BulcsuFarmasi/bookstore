import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './modules/cart-routing/cart-routing.module';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  declarations: [ CartComponent ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers: [ CartService, StorageService ]
})
export class CartModule { }

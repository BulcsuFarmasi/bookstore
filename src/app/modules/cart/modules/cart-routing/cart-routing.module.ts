import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from '../../components/cart/cart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cart', component: CartComponent },
    ])
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }

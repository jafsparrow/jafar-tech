import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CartDataAccessModule,
    // RouterModule.forChild([{ path: '', component: CartComponent }]),
  ],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartFeaturesListModule {}

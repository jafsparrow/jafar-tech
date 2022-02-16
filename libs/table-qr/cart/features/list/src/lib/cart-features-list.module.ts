import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    CartDataAccessModule,
    RouterModule.forChild([{ path: '', component: CartComponent }]),
    TableQrUiModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,

    CartDataAccessModule,
  ],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartFeaturesListModule {}

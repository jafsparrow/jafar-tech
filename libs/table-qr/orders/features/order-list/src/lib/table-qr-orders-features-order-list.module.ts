import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderContainerComponent } from './order-container/order-container.component';
import { RouterModule } from '@angular/router';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderContainerComponent,
      },
    ]),
    CartDataAccessModule,
  ],
  declarations: [OrderContainerComponent],
})
export class TableQrOrdersFeaturesOrderListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderContainerComponent } from './order-container/order-container.component';
import { RouterModule } from '@angular/router';
import { TableQrOrdersDataAccessModule } from '@jafar-tech/table-qr-orders-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderContainerComponent,
      },
    ]),
    TableQrOrdersDataAccessModule,
  ],
  declarations: [OrderContainerComponent],
})
export class TableQrOrdersFeaturesOrderListModule {}

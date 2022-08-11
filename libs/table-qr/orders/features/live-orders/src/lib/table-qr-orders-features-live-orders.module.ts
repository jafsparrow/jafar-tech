import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveOrderComponent } from './live-order/live-order.component';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { TableQrOrdersDataAccessModule } from '@jafar-tech/table-qr-orders-data-access';
import { SharedCoreModule } from '@jafar-tech/shared/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LiveOrderComponent,
      },
    ]),
    SharedCoreModule,
    MatExpansionModule,
    MatButtonModule,
    TableQrOrdersDataAccessModule,
  ],

  declarations: [LiveOrderComponent],
})
export class TableQrOrdersFeaturesLiveOrdersModule {}

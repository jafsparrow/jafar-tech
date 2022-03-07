import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveOrderComponent } from './live-order/live-order.component';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LiveOrderComponent,
      },
    ]),
    MatExpansionModule,
  ],

  declarations: [LiveOrderComponent],
})
export class TableQrOrdersFeaturesLiveOrdersModule {}

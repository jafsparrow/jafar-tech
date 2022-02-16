import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderContainerComponent } from './order-container/order-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderContainerComponent,
      },
    ]),
  ],
  declarations: [OrderContainerComponent],
})
export class TableQrCartFeaturesOrderModule {}

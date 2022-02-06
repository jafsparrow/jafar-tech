import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFeaturesListModule } from '@jafar-tech/table-qr-products-features-list';
import { CartFeaturesListModule } from '@jafar-tech/table-qr-cart-features-list';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ProductsFeaturesListModule,
    CartFeaturesListModule,
    TableQrUiModule,
  ],
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
})
export class TableQrShellModule {}

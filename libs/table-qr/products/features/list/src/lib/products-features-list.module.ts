import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';
import { ProductListComponent } from './product-list/product-list.component';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';

import { MatTabsModule } from '@angular/material/tabs';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild([{ path: '', component: ProductListComponent }]),
    ProductsDataAccessModule,
    CartDataAccessModule,
    MatTabsModule,
    TableQrUiModule,
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductsFeaturesListModule {}

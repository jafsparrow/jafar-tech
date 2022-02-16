import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailComponent,
      },
    ]),
    TableQrUiModule,
    ProductsDataAccessModule,
  ],
  declarations: [ProductDetailComponent],
})
export class TableQrProductsFeaturesDetailModule {}

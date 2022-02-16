import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ContainerComponent,
        loadChildren: () =>
          import('@jafar-tech/table-qr/products/features/shell').then(
            (m) => m.TableQrProductsFeaturesShellModule
          ),
      },
      {
        path: 'cart',
        component: ContainerComponent,
        loadChildren: () =>
          import('@jafar-tech/table-qr-cart-features-list').then(
            (m) => m.CartFeaturesListModule
          ),
      },
      {
        path: 'order',
        component: ContainerComponent,
        loadChildren: () =>
          import('@jafar-tech/table-qr/cart/features/order').then(
            (m) => m.TableQrCartFeaturesOrderModule
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'products' },
    ]),
    TableQrUiModule,
    ProductsDataAccessModule,
    CartDataAccessModule,
  ],
  declarations: [ContainerComponent],
  exports: [],
})
export class TableQrShellModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerComponent,
        children: [
          {
            path: '',
            redirectTo: 'products',
            pathMatch: 'full',
          },
          {
            path: 'products',
            loadChildren: () =>
              import('@jafar-tech/table-qr/products/features/shell').then(
                (m) => m.TableQrProductsFeaturesShellModule
              ),
          },
          {
            path: 'cart',
            loadChildren: () =>
              import('@jafar-tech/table-qr-cart-features-list').then(
                (m) => m.CartFeaturesListModule
              ),
          },
          {
            path: 'order',
            loadChildren: () =>
              import('@jafar-tech/table-qr/cart/features/order').then(
                (m) => m.TableQrCartFeaturesOrderModule
              ),
          },
        ],
      },
    ]),
    TableQrUiModule,
    ProductsDataAccessModule,
    CartDataAccessModule,
    MatSidenavModule,
  ],
  declarations: [ContainerComponent],
  exports: [],
})
export class TableQrShellModule {}

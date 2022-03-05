import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableQrOrganisationDetailsModule } from '@jafar-tech/table-qr/organisation/details';
import { TableQrOrganisationDataAccessModule } from '@jafar-tech/table-qr/organisation/data-access';
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
    TableQrOrganisationDataAccessModule,
    ProductsDataAccessModule,
    CartDataAccessModule,

    MatSidenavModule,
    MatSnackBarModule,
  ],
  declarations: [ContainerComponent],
  exports: [],
})
export class TableQrShellModule {}

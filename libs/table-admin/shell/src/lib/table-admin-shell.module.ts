import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminContainerComponent,
        children: [
          {
            path: 'liveorder',
            loadChildren: () =>
              import('@jafar-tech/table-qr/orders/features/live-orders').then(
                (m) => m.TableQrOrdersFeaturesLiveOrdersModule
              ),
          },
          {
            path: 'add',
            loadChildren: () =>
              import('@jafar-tech/table-qr/products/features/add').then(
                (m) => m.TableQrProductsFeaturesAddModule
              ),
          },
          {
            path: 'create-order',
            loadChildren: () =>
              import('@jafar-tech/table-qr/orders/features/create-order').then(
                (m) => m.TableQrOrdersFeaturesCreateOrderModule
              ),
          },
          {
            path: 'cart',
            loadChildren: () =>
              import('@jafar-tech/table-qr-cart-features-list').then(
                (m) => m.CartFeaturesListModule
              ),
            data: { menuURL: '../create-order' },
          },
          {
            path: 'menu',
            loadChildren: () =>
              import('@jafar-tech/table-qr/menu/features/add-menu').then(
                (m) => m.TableQrMenuFeaturesAddMenuModule
              ),
          },
        ],
      },
    ]),
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    ProductsDataAccessModule,
  ],
  declarations: [AdminContainerComponent],
})
export class TableAdminShellModule {}

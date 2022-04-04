import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthGuard, RoleGuard } from '@jafar-tech/table-qr/core';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { TableQrCategoryDataAccessCategoryModule } from '@jafar-tech/table-qr/category/data-access/category';
import { TableQrOrganisationDataAccessModule } from '@jafar-tech/table-qr/organisation/data-access';
import { TableQrOrdersDataAccessModule } from '@jafar-tech/table-qr-orders-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'auth',
        loadChildren: () =>
          import('@jafar-tech/table-qr/authentication/features/singnin').then(
            (m) => m.TableQrAuthenticationFeaturesSingninModule
          ),
      },

      {
        path: '',
        component: AdminContainerComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          {
            path: 'liveorder',
            loadChildren: () =>
              import('@jafar-tech/table-qr/orders/features/live-orders').then(
                (m) => m.TableQrOrdersFeaturesLiveOrdersModule
              ),
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@jafar-tech/table-qr/dashboard/features/dashboard').then(
                (m) => m.TableQrDashboardFeaturesDashboardModule
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
            data: { menuURL: '../create-order', roles: ['admin', 'staff'] },
            canActivate: [RoleGuard],
          },
          {
            path: 'org',
            loadChildren: () =>
              import('@jafar-tech/table-qr/organisation/details').then(
                (m) => m.TableQrOrganisationDetailsModule
              ),
          },
          {
            path: 'menu',
            loadChildren: () =>
              import('@jafar-tech/table-qr/menu/features/add-menu').then(
                (m) => m.TableQrMenuFeaturesAddMenuModule
              ),
            canActivate: [RoleGuard],

            data: { roles: ['admin', 'staff'] },
          },
        ],
      },
    ]),
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    TableQrUiModule,
    TableQrOrganisationDataAccessModule,
    ProductsDataAccessModule,
    TableQrCategoryDataAccessCategoryModule,
    TableQrOrdersDataAccessModule,
  ],
  declarations: [AdminContainerComponent],
})
export class TableAdminShellModule {}

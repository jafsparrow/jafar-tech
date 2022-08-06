import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order/create-order.component';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDialogModule } from '@angular/material/dialog';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { TableQrOrdersDataAccessModule } from '@jafar-tech/table-qr-orders-data-access';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateOrderComponent,

        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          {
            path: 'table',
            loadChildren: () =>
              import(
                '@jafar-tech/table-qr/table-management/features/table-search'
              ).then((m) => m.TableQrTableManagementFeaturesTableSearchModule),
          },
          {
            path: 'take-away',
            loadChildren: () =>
              import(
                '@jafar-tech/table-qr/take-away/features/add-take-away'
              ).then((m) => m.TableQrTakeAwayFeaturesAddTakeAwayModule),
          },
        ],
      },
    ]),
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    ProductsDataAccessModule,
    CartDataAccessModule,
    TableQrOrdersDataAccessModule,
    TableQrUiModule,
  ],
  declarations: [CreateOrderComponent],
})
export class TableQrOrdersFeaturesCreateOrderModule {}

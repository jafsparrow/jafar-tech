import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenOrderViewComponent } from './kitchen-order-view/kitchen-order-view.component';
import { RouterModule } from '@angular/router';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TableQrOrdersDataAccessModule } from '@jafar-tech/table-qr-orders-data-access';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule.forChild([
      {
        path: '',
        component: KitchenOrderViewComponent,
      },
    ]),
    MatChipsModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    TableQrOrdersDataAccessModule,
  ],
  declarations: [KitchenOrderViewComponent],
})
export class TableQrOrdersFeaturesKitchenOrderManagementModule {}
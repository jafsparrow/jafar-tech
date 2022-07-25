import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableQrTableManagementDataAccessModule } from '@jafar-tech/table-qr/table-management/data-access';
import { TableListComponent } from './table-list/table-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TableQrTableManagementDataAccessModule,
    RouterModule.forChild([{ path: '', component: TableListComponent }]),
  ],
  declarations: [TableListComponent],
})
export class TableQrTableManagementFeaturesTableListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TableListComponent }]),
  ],
  declarations: [TableListComponent],
})
export class TableQrTableManagementFeaturesTableListModule {}

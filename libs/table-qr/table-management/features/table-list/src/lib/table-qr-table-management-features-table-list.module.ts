import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TableListComponent }]),
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [TableListComponent],
})
export class TableQrTableManagementFeaturesTableListModule {}

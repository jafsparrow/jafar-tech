import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAddComponent } from './table-add/table-add.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TableAddComponent,
      },
    ]),
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  declarations: [TableAddComponent],
})
export class TableQrTableManagementFeaturesTableAddModule {}

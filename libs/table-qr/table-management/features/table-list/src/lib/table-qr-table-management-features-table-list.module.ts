import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableQrTableManagementDataAccessModule } from '@jafar-tech/table-qr/table-management/data-access';
import { TableListComponent } from './table-list/table-list.component';
import { RouterModule } from '@angular/router';
import { TableSearchComponent } from './table-search/table-search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TableQrTableManagementDataAccessModule,
    RouterModule.forChild([{ path: '', component: TableListComponent }]),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  declarations: [TableListComponent, TableSearchComponent],
})
export class TableQrTableManagementFeaturesTableListModule {}

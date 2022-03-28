import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableQrOrganisationDataAccessModule } from '@jafar-tech/table-qr/organisation/data-access';
import { OrgDetailComponent } from './org-detail/org-detail.component';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableQrOrganisationDataAccessModule,
    RouterModule.forChild([{ path: '', component: OrgDetailComponent }]),
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonModule,
    TableQrOrganisationDataAccessModule,
  ],
  declarations: [OrgDetailComponent],
})
export class TableQrOrganisationDetailsModule {}

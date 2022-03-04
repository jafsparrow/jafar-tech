import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableQrOrganisationDataAccessModule } from '@jafar-tech/table-qr/organisation/data-access';

@NgModule({
  imports: [CommonModule, TableQrOrganisationDataAccessModule],
})
export class TableQrOrganisationDetailsModule {}

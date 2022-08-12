import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TableQrOrganisationDataAccessModule } from '@jafar-tech/table-qr/organisation/data-access';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';
import { TableQrCategoryDataAccessCategoryModule } from '@jafar-tech/table-qr/category/data-access/category';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    TableQrUiModule
  ],
  declarations: [DashboardComponent],
})
export class TableQrDashboardFeaturesDashboardModule {}

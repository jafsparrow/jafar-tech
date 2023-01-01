import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAddComponent } from './table-add/table-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: '', component: TableAddComponent
  }])],
  declarations: [TableAddComponent],
})
export class TableQrTableManagementFeaturesTableAddModule {}

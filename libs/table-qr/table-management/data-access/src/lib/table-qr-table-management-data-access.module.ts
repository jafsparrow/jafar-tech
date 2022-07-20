import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  tableReducer,
  TABLE_FEATURE_KEY,
} from './+state/table-management.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TABLE_FEATURE_KEY, tableReducer),
  ],
})
export class TableQrTableManagementDataAccessModule {}

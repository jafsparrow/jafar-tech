import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  tableReducer,
  TABLE_FEATURE_KEY,
} from './+state/table-management.reducers';
import { TableManagementEffects } from './+state/table-management.effects';
import { EffectsModule } from '@ngrx/effects';
import { TableManagementService } from './table-management.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TABLE_FEATURE_KEY, tableReducer),
    EffectsModule.forFeature([TableManagementEffects]),
  ],
  // providers: [TableManagementService],
})
export class TableQrTableManagementDataAccessModule {}

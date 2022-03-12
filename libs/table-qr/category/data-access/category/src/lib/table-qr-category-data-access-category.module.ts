import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  categoryReducer,
  CATEGORY_FEATURE_KEY,
} from './+state/category.reducets';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature(CATEGORY_FEATURE_KEY, categoryReducer),
  ],
})
export class TableQrCategoryDataAccessCategoryModule {}

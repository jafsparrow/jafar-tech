import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  categoryReducer,
  CATEGORY_FEATURE_KEY,
} from './+state/category.reducets';
import { StoreModule } from '@ngrx/store';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './+state/category.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forFeature(CATEGORY_FEATURE_KEY, categoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
  ],
})
export class TableQrCategoryDataAccessCategoryModule {}

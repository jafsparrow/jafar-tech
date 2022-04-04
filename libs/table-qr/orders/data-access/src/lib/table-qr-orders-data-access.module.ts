import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orderReducer, ORDER_FEATURE_KEY } from './+state/orders.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './+state/orders.effects';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
    EffectsModule.forFeature([OrderEffects]),
  ],
  // providers: [],
})
export class TableQrOrdersDataAccessModule {}

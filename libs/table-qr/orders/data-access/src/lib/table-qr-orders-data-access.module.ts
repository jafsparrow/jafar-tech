import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { orderReducer, ORDER_FEATURE_KEY } from './+state/orders.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './+state/orders.effects';
import { OrderService } from './orders.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
    EffectsModule.forFeature([OrderEffects]),
  ],
  providers: [OrderService],
})
export class TableQrOrdersDataAccessModule {}

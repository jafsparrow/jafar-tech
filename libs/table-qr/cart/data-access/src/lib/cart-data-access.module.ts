import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cartReducer, CART_FEATURE_KEY } from './+state/cart.reducers';
import { HttpClientModule } from '@angular/common/http';
import { CartEffects } from './+state/cart.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forFeature(CART_FEATURE_KEY, cartReducer),
    EffectsModule.forFeature([CartEffects]),
  ],
})
export class CartDataAccessModule {}

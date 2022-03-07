import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  productsReducer,
  PRODUCTS_FEATURE_KEY,
} from './+state/products.reducers';
import { ProductsEffects } from './+state/product.effects';
import { ProductsService } from './products.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(PRODUCTS_FEATURE_KEY, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  // providers: [ProductsService, ProductsEffects],
})
export class ProductsDataAccessModule {}

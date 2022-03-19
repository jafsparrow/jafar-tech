import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  AUTHENTICATION_FEATURE_KEY,
  authReducer,
} from './+sate/authentication.reducers';
import { AuthenticationEffects } from './+sate/authentication.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(AUTHENTICATION_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthenticationEffects]),
  ],
})
export class TableQrAuthenticationDataAccessModule {}

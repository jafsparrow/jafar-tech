import { createFeatureSelector } from '@ngrx/store';
import {
  AuthenticationState,
  AUTHENTICATION_FEATURE_KEY,
} from './authentication.reducers';

export const selectAuthState = createFeatureSelector<AuthenticationState>(
  AUTHENTICATION_FEATURE_KEY
);

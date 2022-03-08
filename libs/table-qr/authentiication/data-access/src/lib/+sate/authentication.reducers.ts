import { User } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import { loginFail, loginSuccess, logout } from './authentication.actions';

export const AUTHENTICATION_FEATURE_KEY = 'authentication';

export interface AuthenticationState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    errorMessage: null,
  })),
  on(loginFail, (state, { message }) => ({
    ...state,
    errorMessage: 'Incorrect username/passoword',
  })),
  on(logout, (state) => initialState)
);

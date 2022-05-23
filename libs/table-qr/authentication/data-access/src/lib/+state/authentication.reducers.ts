import { User } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  hydrateUserFromLocalStorage,
  login,
  loginFail,
  loginSuccess,
  logout,
} from './authentication.actions';

export const AUTHENTICATION_FEATURE_KEY = 'authentication';

export interface AuthenticationState {
  isAuthenticated: boolean;
  loginInProgress: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: AuthenticationState = {
  isAuthenticated: false,
  loginInProgress: false,
  user: null,
  errorMessage: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({...state, loginInProgress: true})),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    loginInProgress: false,
    errorMessage: null,
  })),
  on(loginFail, (state, { message }) => ({
    ...state,
    errorMessage: 'Incorrect username or password, try again',
    loginInProgress: false,
  })),
  on(logout, (state) => initialState),
  on(hydrateUserFromLocalStorage, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    loginInProgress: false,
    user: user,
    errorMessage: null
  }))
);

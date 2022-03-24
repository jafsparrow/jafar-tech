import { LoginData, User } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AUTHENTICATION] User Login',
  props<{ loginData: LoginData }>()
);

export const loginSuccess = createAction(
  '[AUTHENTICATION] User Login Suceess',
  props<{ user: User; token: string }>()
);

export const loginFail = createAction(
  '[AUTHENTICATION] Login Fail',
  props<{ message: string }>()
);

export const hydrateUserFromLocalStorage = createAction(
  '[AUTHENTICATION] hydrate user from local storage',
  props<{ user: User }>()
);
export const tableLogin = createAction(
  '[AUTHENTICATION] table User Login',
  props<{ loginData: LoginData }>()
);

export const logout = createAction('[AUTHENTICATION] Logout');

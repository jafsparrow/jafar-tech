import { LoginData, User } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AUTHENTICATION] User Login',
  props<{ loginData: LoginData }>()
);

export const loginSuccess = createAction(
  '[AUTHENTICATION] User Login Suceess',
  props<{ user: User }>()
);

export const loginFail = createAction(
  '[AUTHENTICATION] Login Fail',
  props<{ message: string }>()
);
export const tableLogin = createAction(
  '[AUTHENTICATION] table User Login',
  props<{ loginData: LoginData }>()
);

export const logout = createAction('[AUTHENTICATION] Logout');
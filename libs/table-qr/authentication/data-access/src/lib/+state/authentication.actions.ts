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

export const signUp = createAction(
  '[AUTHENTICATION] new organisation signup',
  props<{ user: User }>()
);

export const signUpSuccess = createAction(
  '[AUTHENTICATION] Signup success',
  props<{ user: User; token: string }>()
);

export const signUpFail = createAction(
  '[AUTHENTICATION] Singup fail',
  props<{ errorMessage: string }>()
);

export const logout = createAction('[AUTHENTICATION] Logout');

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@jafar-tech/shared/data-access';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import {
  login,
  loginFail,
  loginSuccess,
  logout,
} from './authentication.actions';

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  LogInEffects$: Observable<any> = this.actions$.pipe(
    ofType(login),
    switchMap((payload) =>
      this.authService
        .logIn(payload.loginData.username, payload.loginData.password!)
        .pipe(
          map((res) => loginSuccess({ user: res as User })),
          catchError((error) => of(loginFail(error)))
        )
    )
  );

  loginSuccessEffect$ = this.actions$.pipe(
    ofType(loginSuccess),
    tap((payload) => {
      localStorage.setItem('token', payload.user.token!);
      this.router.navigateByUrl('/');
    })
  );

  logoutEffect$ = this.actions$.pipe(
    ofType(logout),
    tap((_) => localStorage.removeItem('token'))
  );
}

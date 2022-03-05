import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cart } from '@jafar-tech/shared/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CartService } from '../cart.service';
import { loadCart, loadCartFail, loadCartSuccess } from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(
    private cartService: CartService,
    private action$: Actions,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  loadCart$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadCart),
      switchMap(() =>
        this.cartService.loadCart().pipe(
          map((cart) => loadCartSuccess({ cart })),
          catchError((error) => of(loadCartFail({ error })))
        )
      )
    );
  });
}

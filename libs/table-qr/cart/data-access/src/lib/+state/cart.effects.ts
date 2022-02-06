import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CartService } from '../cart.service';
import { loadCart, loadCartFail, loadCartSuccess } from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private cartService: CartService, private action$: Actions) {}

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

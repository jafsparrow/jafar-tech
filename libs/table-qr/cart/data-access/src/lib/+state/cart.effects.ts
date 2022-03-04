import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@jafar-tech/shared/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CartService } from '../cart.service';
import {
  loadCart,
  loadCartFail,
  loadCartSuccess,
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrder,
} from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(
    private cartService: CartService,
    private action$: Actions,
    private router: Router
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

  placeOrder$ = createEffect(() => {
    return this.action$.pipe(
      ofType(placeOrder),
      switchMap((order) => {
        return this.cartService.placeOrder(order.cart).pipe(
          map((order) => orderPlaceSuccess()),
          catchError((error) => of(orderPlaceFail()))
        );
      })
    );
  });

  placeOrderSuccess$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(orderPlaceSuccess),
        tap((data: any) => this.router.navigate(['shell/products']))
      );
    },
    { dispatch: false }
  );
}

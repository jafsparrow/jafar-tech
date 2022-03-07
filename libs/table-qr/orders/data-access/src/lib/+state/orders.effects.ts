import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { clearCart } from '@jafar-tech/table-qr-cart-data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { OrderService } from '../orders.service';
import {
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrder,
} from './orders.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private orderService: OrderService,
    private action$: Actions,
    private router: Router,
    private store: Store,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {}

  placeOrder$ = createEffect(() => {
    return this.action$.pipe(
      ofType(placeOrder),
      switchMap((order) => {
        return this.orderService.placeOrder(order.cart).pipe(
          map((order) => orderPlaceSuccess()),
          catchError((error) =>
            of(
              orderPlaceFail({
                errorMessage: 'Somethig went wrong, Please try again',
              })
            )
          )
        );
      })
    );
  });

  placeOrderSuccess$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(orderPlaceSuccess),
        tap((data: any) =>
          this._snackBar.open('Your order is placed successfully', 'close')
        ),
        tap((data: any) => this.store.dispatch(clearCart())),
        tap((data: any) => this.location.back())
      );
    },
    { dispatch: false }
  );
}

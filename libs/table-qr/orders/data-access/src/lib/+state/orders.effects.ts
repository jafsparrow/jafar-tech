import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OrderSummary } from '@jafar-tech/shared/data-access';
import { clearCart } from '@jafar-tech/table-qr-cart-data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { OrderService } from '../orders.service';
import {
  loadRecentOrders,
  loadRecentOrdersFail,
  loadRecentOrdersSuccess,
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrder,
  updateOrderItemStatus,
  updateOrderItemStatusFail,
} from './orders.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private orderService: OrderService,
    private action$: Actions,
    // private router: Router,
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

  loadRecentOrdersEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadRecentOrders),
      switchMap((data) =>
        this.orderService.getRecentOrders().pipe(
          map((res) =>
            loadRecentOrdersSuccess({ recentOrders: res as OrderSummary[] })
          ),
          catchError((error) =>
            of(
              loadRecentOrdersFail({
                errorMessage: 'Something happened while loading orders',
              })
            )
          )
        )
      )
    );
  });

  updateOrderItemStatusEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateOrderItemStatus),
      switchMap((data) =>
        this.orderService
          .updateOrderItemStatus(
            data.orderId,
            data.orderItemKey,
            data.orderItemStatus
          )
          .pipe(
            map((data) =>
              loadRecentOrdersSuccess({ recentOrders: data as OrderSummary[] })
            ),
            catchError((error) =>
              of(
                updateOrderItemStatusFail({
                  errorMessage: 'somethign wrong happened while updating',
                })
              )
            )
          )
      )
    );
  });
}

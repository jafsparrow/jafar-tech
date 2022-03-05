import { Cart } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const placeOrder = createAction(
  '[Cart] place a new order',
  props<{ cart: Cart }>()
);

export const placeOrderTurnSpinnerOn = createAction(
  '[Cart] place order spinner is On'
);

export const orderPlaceSuccess = createAction('[Cart] Order place success');
export const orderPlaceFail = createAction('[Cart] order Place failed');

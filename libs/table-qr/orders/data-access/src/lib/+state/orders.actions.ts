import { Cart } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const placeOrder = createAction(
  '[Order] place a new order',
  props<{ cart: Cart }>()
);

export const placeOrderTurnSpinnerOn = createAction(
  '[Order] place order spinner is On'
);

export const orderPlaceSuccess = createAction('[Order] Order place success');
export const orderPlaceFail = createAction('[Order] order Place failed');

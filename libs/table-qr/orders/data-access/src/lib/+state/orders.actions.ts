import { Cart, OrderSummary } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const placeOrder = createAction(
  '[Order] place a new order',
  props<{ cart: Cart }>()
);

export const placeOrderTurnSpinnerOn = createAction(
  '[Order] place order spinner is On'
);

export const orderPlaceSuccess = createAction('[Order] Order place success');
export const orderPlaceFail = createAction(
  '[Order] order Place failed',
  props<{ errorMessage: string }>()
);

export const loadRecentOrders = createAction('[Order] Load recent orders');
export const loadRecentOrdersSuccess = createAction(
  '[Order] Load recent orders success',
  props<{ recentOrders: OrderSummary[] }>()
);
export const loadRecentOrdersFail = createAction(
  '[Order] Load recent orders failed',
  props<{ errorMessage: string }>()
);

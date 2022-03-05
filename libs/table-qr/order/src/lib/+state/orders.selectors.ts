import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order, ORDER_FEATURE_KEY } from './orders.reducers';

export const selectOrderState = createFeatureSelector<Order>(ORDER_FEATURE_KEY);

export const selectPendingOrder = createSelector(
  selectOrderState,
  (state: Order) => state.openOrders
);

export const selectPlaceOrderSpinner = createSelector(
  selectOrderState,
  (state: Order) => state.placeOrderSpinner
);

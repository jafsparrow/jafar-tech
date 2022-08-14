import {
  Cart,
  OrderItemStatus,
  OrderStatus,
  OrderSummary,
} from '@jafar-tech/shared/data-access';
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

export const updateOrderStatus = createAction(
  '[Order] update order status',
  props<{ orderId: string; status: OrderStatus }>()
);

export const updateOrderStatusSuccess = createAction(
  '[Order] update order status success',
  props<{ recentOrders: OrderSummary[] }>()
);

export const updateOrderStatusFail = createAction(
  '[Order] update order status failed',
  props<{ errorMessage: string }>()
);

export const updateOrderItemStatus = createAction(
  '[Order] update orderItem status',
  props<{
    orderId: string;
    orderItemKey: string;
    orderItemStatus: OrderItemStatus;
  }>()
);

export const updateOrderItemStatusSuccess = createAction(
  '[Order] update orderItem status success',
  props<{ recentOrders: OrderSummary[] }>()
);

export const updateOrderItemStatusFail = createAction(
  '[Order] update orderItem status faile',
  props<{ errorMessage: string }>()
);

export const updateSelectedFilteredCategories = createAction(
  '[Order] update the categries filter',
  props<{ filteredCategories: string[] }>()
);

export const pollRecentOrders = createAction(
  '[Order] Polling of orders in every 5 sec'
);

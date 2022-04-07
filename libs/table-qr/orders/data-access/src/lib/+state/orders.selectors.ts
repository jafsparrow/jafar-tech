import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order, ORDER_FEATURE_KEY } from './orders.reducers';

export const selectOrderState = createFeatureSelector<Order>(ORDER_FEATURE_KEY);

export const selectRecentOrders = createSelector(
  selectOrderState,
  (state: Order) => state.recentOrders
);

export const selectPlaceOrderSpinner = createSelector(
  selectOrderState,
  (state: Order) => state.placeOrderSpinner
);

export const selectOrderErrorMessage = createSelector(
  selectOrderState,
  (state: Order) => state.errorMessage
);

export const selectOrderItemsFromRecentOrders = createSelector(
  selectRecentOrders,
  (orders) => {
    let orderItemArray = orders
      .map((order) => order.orderItems)
      .reduce((prevVal, item) => [...prevVal, ...item], []);

    let categoryVice = {};

    // orderItemArray.map((item) => {
    // if (categoryVice[item.category]) {
    //   categoryVice[item.category] = [...categoryVice[item.category], item];
    // } else {
    //   categoryVice[item.category] = [];
    // }

    //   const itemKey = 'test'// item.key!;

    //   categoryVice[item.key] = [
    //     ...(categoryVice[item.key] || 0),
    //     count:3,
    //   ];
    // });

    // }

    return orderItemArray;
  }
);

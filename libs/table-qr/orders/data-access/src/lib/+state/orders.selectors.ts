import {
  OrderItem,
  OrderItemStatus,
  OrderStatus,
} from '@jafar-tech/shared/data-access';
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
    console.log('orders', orders);
    let orderItemArray: OrderItem[] = orders
      .map((order) =>
        order.orderItems.map((item) => ({
          ...item,
          orderId: order._id?.toString(),
          orderNumber: order.orderNumber,
        }))
      )
      .reduce((prevVal, item) => [...prevVal, ...item], [])
      .filter((item) => item.status != OrderItemStatus.READY);

    let categoryVice: any = {};

    orderItemArray.forEach(
      (item) =>
        (categoryVice[item.key!] =
          categoryVice[item.key!] + item.count || item.count)
    );

    console.log(orderItemArray);
    let final = orderItemArray.map((item) => {
      if (categoryVice[item.key!]) {
        return { ...item, totalCountOfSameItem: categoryVice[item.key!] };
      }
      return item;
    });

    console.log('final', final);
    return final;
  }
);

export const selectUserFilteredCategories = createSelector(
  selectOrderState,
  (state) => state.userSelectedFilterCategories
);

export const selectFilteredOrderItemsFromRecentOrders = createSelector(
  selectUserFilteredCategories,
  selectOrderItemsFromRecentOrders,
  (filteredCategories, orderLineItems) => {
    return orderLineItems.filter((item) =>
      filteredCategories.length
        ? filteredCategories.indexOf(item.product.category) !== -1
        : true
    );
  }
);

import { createReducer, on } from '@ngrx/store';
import {
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrderTurnSpinnerOn,
} from './orders.actions';

export const ORDER_FEATURE_KEY = 'order';

export interface Order {
  errorMessage: string;
  openOrders: string[];
  placeOrderSpinner: boolean;
}

const initialState: Order = {
  openOrders: [],
  errorMessage: '',
  placeOrderSpinner: false,
};

export const orderReducer = createReducer(
  initialState,

  on(orderPlaceSuccess, (state) => {
    return { ...state, errorMessage: '', placeOrderSpinner: false };
  }),
  on(orderPlaceFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    placeOrderSpinner: false,
  })),
  on(placeOrderTurnSpinnerOn, (state) => ({
    ...state,
    placeOrderSpinner: true,
  }))
);

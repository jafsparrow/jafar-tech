import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const loadCart = createAction('[Cart] Load Cart Items');

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: Cart }>()
);

export const loadCartFail = createAction(
  '[Cart] Load Cart Failed',
  props<{ error: any }>()
);

export const addToCart = createAction(
  '[Cart] add item to cart',
  props<{ item: CartItem }>()
);

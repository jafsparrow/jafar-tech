import { Cart, CartItem, Tax, User } from '@jafar-tech/shared/data-access';
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
export const setCartUser = createAction(
  '[Cart] set Cart User',
  props<{ user: User }>()
);
export const addToCart = createAction(
  '[Cart] add item to cart',
  props<{ item: CartItem }>()
);

export const updateCart = createAction(
  '[Cart] update item to cart',
  props<{ item: CartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] remove item to cart',
  props<{ itemId: string }>()
);

export const clearCart = createAction('[Cart] clear the cart');

export const loadTaxes = createAction(
  '[Cart] load organisation Taxes',
  props<{ taxes: Tax[] }>()
);

import { state } from '@angular/animations';
import { Cart } from '@jafar-tech/shared/data-access';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CART_FEATURE_KEY } from './cart.reducers';

export const selectCartState = createFeatureSelector<Cart>(CART_FEATURE_KEY);

export const selectCart = createSelector(selectCartState, (state) => {
  return {
    ...state,
    total: state.cartItems.reduce((tot, prod) => tot + prod.product.price, 0),
  };
});

import { Cart } from '@jafar-tech/shared/data-access';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CART_FEATURE_KEY } from './cart.reducers';

export const selectCartState = createFeatureSelector<Cart>(CART_FEATURE_KEY);

export const selectCart = createSelector(selectCartState, (state) => {
  return {
    ...state,
    total: Object.values(state.cartItems).reduce(
      (tot, cartItem) => tot + cartItem.product.price * cartItem.count,
      0
    ),
  };
});

export const selectNumberOfItemsInCart = createSelector(
  selectCartState,
  (state) => Object.keys(state.cartItems).length
);

export const selectCartTotal = createSelector(selectCartState, (state) =>
  getTotalCartAmout(state)
);

export const selectInCartProductCount = createSelector(
  selectCart,
  (state: Cart, props: any) => {
    const idOfProduct = props.id;

    return state.cartItems[idOfProduct]
      ? state.cartItems[idOfProduct].count
      : 0;
  }
);

export const getTotalCartAmout = (state: Cart): number | null =>
  Object.values(state.cartItems).reduce(
    (tot, cartItem) => tot + cartItem.product.price * cartItem.count,
    0
  );

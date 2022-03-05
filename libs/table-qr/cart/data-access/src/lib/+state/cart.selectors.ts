import { Cart } from '@jafar-tech/shared/data-access';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CART_FEATURE_KEY } from './cart.reducers';

export const selectCartState = createFeatureSelector<Cart>(CART_FEATURE_KEY);

export const selectCart = createSelector(selectCartState, (state) => {
  return {
    ...state,
    total: Object.values(state.cartItems).reduce((tot, cartItem) => {
      return (
        tot +
        (cartItem.product.price +
          cartItem.modifiers!.reduce(
            (prev, curr) => prev + parseInt(curr?.price.toString()),
            0
          )) *
          cartItem.count
      );
    }, 0),
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

    var count = 0;
    Object.keys(state.cartItems).forEach((key) => {
      if (key.toString().includes(idOfProduct)) {
        count = count + state.cartItems[key].count;
      }
    });
    return count;
  }
);

export const getTotalCartAmout = (state: Cart): number | null =>
  Object.values(state.cartItems).reduce(
    (tot, cartItem) => tot + cartItem.product.price * cartItem.count,
    0
  );

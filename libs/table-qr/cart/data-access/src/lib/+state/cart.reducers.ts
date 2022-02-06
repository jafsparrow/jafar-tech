import { Cart } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import { addToCart, loadCartSuccess } from './cart.actions';

export const CART_FEATURE_KEY = 'cart';
const initialState: Cart = {
  cartItems: [],
  total: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state, { cart }) => ({ ...state, cart })),
  on(addToCart, (state, { item }) => {
    var mapcartItems = state.cartItems.map((item) => item);
    var existingElementIndex = mapcartItems.findIndex(
      (cartel) => cartel.product.id == item.product.id
    );

    console.log('index', existingElementIndex);
    if (existingElementIndex == -1) {
      console.log('elelemnt is new');
      return { ...state, cartItems: [...state.cartItems, item] };
    }
    var newCount = mapcartItems[existingElementIndex].count + item.count;
    mapcartItems[existingElementIndex] = {
      ...mapcartItems[existingElementIndex],
      count: newCount,
    };
    return { ...state, cartItems: mapcartItems };
  })
);

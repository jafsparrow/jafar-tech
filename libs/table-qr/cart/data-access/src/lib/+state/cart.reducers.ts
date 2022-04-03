import { Cart, Product } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  clearCart,
  loadCartSuccess,
  loadTaxes,
  removeFromCart,
  updateCart,
} from './cart.actions';

export const CART_FEATURE_KEY = 'cart';

const initialState: Cart = {
  createdAt: new Date(),
  cartItems: {},
  taxes: [],
  placeOrderSpinner: false,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state, { cart }) => ({ ...state, cart })),
  on(addToCart, (state, { item }) => {
    var newCartItem = { ...item };
    var key = '';
    newCartItem.modifiers?.forEach(
      (modifier) => (key = key + modifier.id?.toString())
    );
    var generatedId = `${item.product._id}${key}`;
    var cartItems = { ...state.cartItems };
    cartItems[generatedId] = {
      ...(cartItems[generatedId] || {}),
      ...{
        ...newCartItem,
        count: cartItems[generatedId]
          ? cartItems[generatedId].count + newCartItem.count
          : newCartItem.count,
      },
    };

    console.log(cartItems);

    return {
      ...state,
      cartItems,
    };
  }),
  on(updateCart, (state, { item }) => {
    var totalcartItems = JSON.parse(JSON.stringify(state.cartItems));

    if (state.cartItems[item.product._id]) {
      if (state.cartItems[item.product._id].count == 1) {
        delete totalcartItems[item.product._id];
      } else {
        console.log(totalcartItems[item.product._id]);
        totalcartItems[item.product._id].count =
          totalcartItems[item.product._id].count - item.count;
      }
    }

    return {
      ...state,
      cartItems: totalcartItems,
    };
  }),
  on(removeFromCart, (state, { itemId }) => {
    var totalcartItems = JSON.parse(JSON.stringify(state.cartItems));
    delete totalcartItems[itemId];
    return {
      ...state,
      cartItems: totalcartItems,
    };
  }),
  on(clearCart, (state) => ({ ...state, cartItems: {} })),
  on(loadTaxes, (state, { taxes }) => ({ ...state, taxes }))
);
// state.cartItems[productId] = {
//   ...(state.cartItems[productId] || []),
//   ...item,
// };

// categoryVice[item.category] = [
//   ...(categoryVice[item.category] || []),
//   item,
// ];

// var mapcartItems = state.cartItems.map((item) => item);
// var existingElementIndex = mapcartItems.findIndex(
//   (cartel) => cartel.product.id == item.product.id
// );

// console.log('index', existingElementIndex);
// if (existingElementIndex == -1) {
//   console.log('elelemnt is new');
//   return { ...state, cartItems: [...state.cartItems, item] };
// }
// var newCount = mapcartItems[existingElementIndex].count + item.count;
// mapcartItems[existingElementIndex] = {
//   ...mapcartItems[existingElementIndex],
//   count: newCount,
// };
// return { ...state, cartItems: mapcartItems };

// export const cartReducer = createReducer(
//   initialState,
//   on(loadCartSuccess, (state, { cart }) => ({ ...state, cart })),
//   on(addToCart, (state, { item }) => {
//     var mapcartItems = state.cartItems.map((item) => item);
//     var existingElementIndex = mapcartItems.findIndex(
//       (cartel) => cartel.product.id == item.product.id
//     );

//     console.log('index', existingElementIndex);
//     if (existingElementIndex == -1) {
//       console.log('elelemnt is new');
//       return { ...state, cartItems: [...state.cartItems, item] };
//     }
//     var newCount = mapcartItems[existingElementIndex].count + item.count;
//     mapcartItems[existingElementIndex] = {
//       ...mapcartItems[existingElementIndex],
//       count: newCount,
//     };
//     return { ...state, cartItems: mapcartItems };
//   })

// return {
//   ...state,
//   ...{
//     ...state.cartItems,
//     ...{
//       ...(state.cartItems[productId] || {}),
//       ...item,
//     },
//   },
// };

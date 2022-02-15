import { Cart, Product } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  loadCartSuccess,
  removeFromCart,
  updateCart,
} from './cart.actions';

export const CART_FEATURE_KEY = 'cart';

const initialState: Cart = {
  createdAt: new Date(),
  cartItems: {},
  total: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state, { cart }) => ({ ...state, cart })),
  on(addToCart, (state, { item }) => {
    var productId = item.product._id.toString();
    var newCartItem = { ...item };
    // check if the item is already existing
    if (state.cartItems[productId]) {
      newCartItem.count = newCartItem.count + state.cartItems[productId].count;
    }

    var { total } = state;
    var newTotal = total + item.count * item.product.price;
    console.log(newTotal, item);
    var cartItems = { ...state.cartItems };
    cartItems[item.product._id] = {
      ...(cartItems[item.product._id] || []),
      ...newCartItem,
    };

    return {
      ...state,

      cartItems,
      total: newTotal,
    };
  }),
  on(updateCart, (state, { item }) => {
    // var newCartItem = { ...item };
    var totalcartItems = JSON.parse(JSON.stringify(state.cartItems));

    console.log(totalcartItems);

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
  })
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

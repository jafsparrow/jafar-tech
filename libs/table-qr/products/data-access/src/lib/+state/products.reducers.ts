import { CategoryViseProducts, Product } from '@jafar-tech/shared/data-access';

import { createReducer, on } from '@ngrx/store';
import {
  loadProductsCategoryVice,
  loadProductsCategoryViceSuccess,
  loadProductsFail,
  loadProductsSuccess,
} from './product.actions';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductState {
  products: Product[];
  productsByCat: CategoryViseProducts;
}

const initialState: ProductState = {
  products: [],
  productsByCat: {},
};

export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsCategoryViceSuccess, (state, { productsByCat }) => {
    console.log('reducer is firing up');

    return {
      ...state,
      productsByCat,
    };
  })
);

// export const categoryviseProductsReducer = createReducer(
//   initialState,
//   on(loadProductsCategoryViceSuccess, (state, { productsByCat }) => ({
//     ...state,
//     productsByCat,
//   }))
// );

import { CategoryViseProducts, Product } from '@jafar-tech/shared/data-access';

import { createReducer, on } from '@ngrx/store';
import {
  loadProductsCategoryVice,
  loadProductsCategoryViceSuccess,
  loadProductsFail,
  loadProductsSuccess,
  productsCategoryViceLoading,
} from './product.actions';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductState {
  products: Product[];
  productsByCat: CategoryViseProducts;
  productFetchInprogress: boolean;
}

const initialState: ProductState = {
  products: [],
  productsByCat: {},
  productFetchInprogress: false,
};

export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsCategoryViceSuccess, (state, { productsByCat }) => {
    console.log('reducer is firing up');

    return {
      ...state,
      productsByCat,
      productFetchInprogress: false,
    };
  }),
  on(productsCategoryViceLoading, (state) => ({
    ...state,
    productFetchInprogress: true,
  }))
);

// export const categoryviseProductsReducer = createReducer(
//   initialState,
//   on(loadProductsCategoryViceSuccess, (state, { productsByCat }) => ({
//     ...state,
//     productsByCat,
//   }))
// );

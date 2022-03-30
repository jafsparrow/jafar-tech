import { CategoryViseProducts, Product } from '@jafar-tech/shared/data-access';

import { createReducer, on } from '@ngrx/store';
import {
  addProductSuccess,
  addupdateProductInprogress,
  loadProductsCategoryVice,
  loadProductsCategoryViceSuccess,
  loadProductsFail,
  loadProductsSuccess,
  productsCategoryViceLoading,
  updateProductBooleans,
} from './product.actions';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductState {
  products: Product[];
  productsByCat: CategoryViseProducts;
  productFetchInprogress: boolean;
  productAddUpdateInProgress: boolean;
  errorMessage: string;
}

const initialState: ProductState = {
  products: [],
  productsByCat: {},
  productFetchInprogress: false,
  productAddUpdateInProgress: false,
  errorMessage: '',
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
      productAddUpdateInProgress: false,
    };
  }),
  on(productsCategoryViceLoading, (state) => ({
    ...state,
    productFetchInprogress: true,
  })),
  on(addupdateProductInprogress, (state) => {
    console.log('inside addupdateprogress reducer');
    return {
      ...state,
      productAddUpdateInProgress: true,
    };
  }),
  on(addProductSuccess, (state, { organisation }) => ({
    ...state,
    productAddUpdateInProgress: false,
    errorMessage: '',
  }))
);

// export const categoryviseProductsReducer = createReducer(
//   initialState,
//   on(loadProductsCategoryViceSuccess, (state, { productsByCat }) => ({
//     ...state,
//     productsByCat,
//   }))
// );

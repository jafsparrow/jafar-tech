import { Product } from '@jafar-tech/shared/data-access';

import { createReducer, on } from '@ngrx/store';
import { loadProductsFail, loadProductsSuccess } from './product.actions';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products }))
);

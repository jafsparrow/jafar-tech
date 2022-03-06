import { CategoryViseProducts, Product } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
  '[Product] Load Products Failed',
  props<{ error: any }>()
);

export const loadProductsCategoryVice = createAction(
  '[Product] Load categoryvise products'
);

export const productsCategoryViceLoading = createAction(
  '[Product] load categoryvise progress in progress'
);

export const loadProductsCategoryViceSuccess = createAction(
  '[Product] Load categoryvise products success',
  props<{ productsByCat: CategoryViseProducts }>()
);

export const loadProductsCategoryViceFail = createAction(
  '[Product] Load categoryvise Failed',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Product] add a product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product] add product success',
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  '[Product] add product failed',
  props<{ error: any }>()
);
export const editProduct = createAction(
  '[Product] edit a product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product] delete product',
  props<{ productId: string }>()
);

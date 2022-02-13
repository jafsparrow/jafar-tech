import { CategoryViseProducts, Product } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
  '[] Load Products Failed',
  props<{ error: any }>()
);

export const loadProductsCategoryVice = createAction(
  '[] Load categoryvise products'
);

export const loadProductsCategoryViceSuccess = createAction(
  '[] Load categoryvise products',
  props<{ productsByCat: CategoryViseProducts }>()
);

export const loadProductsCategoryViceFail = createAction(
  '[] Load Products Failed',
  props<{ error: any }>()
);

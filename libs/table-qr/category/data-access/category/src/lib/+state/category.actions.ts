import { Category, Organisation } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction('[CATEGORY] loadcategory');
export const loadCategoriesSuccess = createAction(
  '[CATEGORY] load category success',
  props<{ categories: Category[] }>()
);
export const loadCategoryFail = createAction(
  '[CATEGORY] load category failed',
  props<{ errorMessage: string }>()
);

export const addCategory = createAction(
  '[CATEGORY] add new category',
  props<{ category: Category }>()
);

export const addCategorySuccess = createAction(
  '[CATEGORY] add category success',
  props<{ organisation: Organisation }>()
);

export const addCategoryFail = createAction(
  '[CATEGORY] add category fail',
  props<{ errorMessage: string }>()
);

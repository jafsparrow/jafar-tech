import { Category } from '@jafar-tech/shared/data-access';
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

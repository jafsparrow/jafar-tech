import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState, CATEGORY_FEATURE_KEY } from './category.reducets';

export const selectCategoryState =
  createFeatureSelector<CategoryState>(CATEGORY_FEATURE_KEY);

export const selectCategories = createSelector(
  selectCategoryState,
  (state) => state.categories
);

export const selectCategoryLoadingIndicator = createSelector(
  selectCategoryState,
  (state) => state.isCategoryLoading
);

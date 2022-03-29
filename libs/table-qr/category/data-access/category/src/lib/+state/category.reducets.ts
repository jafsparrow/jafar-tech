import { Category } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  addCategory,
  addCategoryFail,
  addCategorySuccess,
  loadCategoriesSuccess,
  loadCategoryFail,
} from './category.actions';

export const CATEGORY_FEATURE_KEY = 'category';

export interface CategoryState {
  categories: Category[];
  isCategoryLoading: boolean;
  errorMessage: string;
}

const initialState: CategoryState = {
  categories: [],
  isCategoryLoading: false,
  errorMessage: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories: categories,
    errorMessage: '',
  })),
  on(loadCategoryFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage: errorMessage,
  })),
  on(addCategory, (state, { category }) => ({
    ...state,
    isCategoryLoading: true,
    errorMessage: '',
  })),
  on(addCategorySuccess, (state, { category }) => ({
    ...state,
    isCategoryLoading: false,
    errorMessage: '',
  })),
  on(addCategoryFail, (state, { errorMessage }) => ({
    ...state,
    isCategoryLoading: false,
    errorMessage,
  }))
);

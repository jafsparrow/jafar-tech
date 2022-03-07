import { state } from '@angular/animations';
import { CartItem, Product } from '@jafar-tech/shared/data-access';
import { selectCart } from '@jafar-tech/table-qr-cart-data-access';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { ProductState, PRODUCTS_FEATURE_KEY } from './products.reducers';

export const selectProductState =
  createFeatureSelector<ProductState>(PRODUCTS_FEATURE_KEY);

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectProductsCategoryVice = createSelector(
  selectProductState,
  (state) => state.productsByCat
);

export const selectProductsArray = createSelector(
  selectProductsCategoryVice,
  (categoryViceProduct) => {
    let productArray: Product[] = [];
    Object.values(categoryViceProduct).forEach(
      (subProductArray) =>
        (productArray = [...productArray, ...subProductArray])
    );
    return productArray;
  }
);

export interface ProdCue extends Product {
  count?: number;
}

export const selectProductConsideringcart = createSelector(
  selectProductsCategoryVice,
  selectCart,
  (categoryviceProducts, cart) => {
    return [];
  }
);

export const selectProductByCategories = createSelector(
  selectProductState,
  (state) => state.productsByCat
);

export const selectProductFetchInProgressFlag = createSelector(
  selectProductState,
  (state) => state.productFetchInprogress
);

// export const selectProductByCategories = createSelector(
//   selectAllProducts,
//   (products) => {
//     return products.reduce((acc, item) => {
//       acc[item.type] = [...(acc[item.type] || []), item];
//       return acc;
//     }, <{ [key: string]: any }>{});
//   }
// );
// export const selectDruidEntities = createSelector(selectAllDruids, (state) => {
//     return state.reduce((acc, druid) => {
//       acc[druid.id] = druid;
//       return acc;
//     }, {} as Record<string, Druid>);
//   });

// export const selectProduct = createSelector(selectAllProducts, (state) => {
//   return state.filter( )
// });

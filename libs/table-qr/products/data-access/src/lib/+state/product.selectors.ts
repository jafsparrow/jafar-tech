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

export interface ProdCue extends Product {
  count?: number;
}

export const selectProductconsideringcart = createSelector(
  selectAllProducts,
  selectCart,
  (currproducts, cart) => {
    var products = currproducts.map((p) => p);
    var newProductsArr: Array<ProdCue> = [];
    let cartItems: CartItem[] = cart.cartItems;

    if (cart.cartItems.length < 1) {
      newProductsArr = products;
    }
    for (var j = 0; j < products.length; j++) {
      var currProduct = products[j];
      var newItem: any = {};
      for (var i = 0; i < cartItems.length; i++) {
        var currCartItem = cartItems[i];
        if (currCartItem.product.id == currProduct.id) {
          newItem = { ...currProduct, count: currCartItem.count };
          break;
        } else {
          newItem = { ...currProduct };
        }
      }
      newProductsArr.push(newItem);
    }
    // console.log('out prod', newProductsArr);
    return newProductsArr;
  }
);

export const selectProductByCategories = createSelector(
  selectAllProducts,
  (products) => {
    return products.reduce((acc, item) => {
      acc[item.type] = [...(acc[item.type] || []), item];
      return acc;
    }, <{ [key: string]: any }>{});
  }
);
// export const selectDruidEntities = createSelector(selectAllDruids, (state) => {
//     return state.reduce((acc, druid) => {
//       acc[druid.id] = druid;
//       return acc;
//     }, {} as Record<string, Druid>);
//   });

// export const selectProduct = createSelector(selectAllProducts, (state) => {
//   return state.filter( )
// });

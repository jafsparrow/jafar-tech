import { Injectable } from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import {
  addProduct,
  addProductFailure,
  addProductSuccess,
  loadProducts,
  loadProductsCategoryVice,
  loadProductsCategoryViceFail,
  loadProductsCategoryViceSuccess,
  loadProductsFail,
  loadProductsSuccess,
} from './product.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private productService: ProductsService,
    private actions$: Actions
  ) {}

  // loadProducts$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadProducts),
  //     switchMap(() =>
  //       this.productService.loadDruids().pipe(
  //         map((products) => {
  //           console.log('loading products');
  //           return loadProductsSuccess({ products });
  //         }),
  //         catchError((error) => of(loadProductsFail({ error })))
  //       )
  //     )
  //   );
  // });

  loadProductCategoryVice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsCategoryVice),
      switchMap(() =>
        this.productService.loadProductsCategoryVice().pipe(
          map((data) => {
            console.log('inside cat prod loading effect');
            return loadProductsCategoryViceSuccess({ productsByCat: data });
          }),
          catchError((error) => of(loadProductsCategoryViceFail({ error })))
        )
      )
    );
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProduct),
      switchMap((data) =>
        this.productService.addProduct(data.product).pipe(
          map((res) => addProductSuccess({ product: res as Product })),
          catchError((error) => of(addProductFailure({ error: error })))
        )
      )
    );
  });
}

import { Injectable } from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';
import { loadOrgInfoSuccess } from '@jafar-tech/table-qr/organisation/data-access';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
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
  productsCategoryViceLoading,
  updateProductBooleanFail,
  updateProductBooleans,
  updateProductFail,
  updateProductSort,
} from './product.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private productService: ProductsService,
    private actions$: Actions,
    private store: Store
  ) {}

  loadProductCategoryVice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsCategoryVice),
      tap(() => this.store.dispatch(productsCategoryViceLoading())),
      switchMap(() =>
        this.productService.loadProductsCategoryVice().pipe(
          map((data) => {
            // console.log('inside cat prod loading effect');
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

  updateProductSort$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProductSort),
      switchMap((payload) =>
        this.productService
          .updateProductsSort(payload.companyId, payload.productSortData)
          .pipe(
            map((res) => {
              // console.log(res.products);
              return loadOrgInfoSuccess({ organisation: res });
            }),
            catchError((error) => of(updateProductFail(error)))
          )
      )
    );
  });

  updateProductBoolean$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProductBooleans),
      switchMap((payload) =>
        this.productService
          .updateProductBoolean(payload.companyId, payload.data)
          .pipe(
            map(
              (res) => loadOrgInfoSuccess({ organisation: res }),
              catchError((error) =>
                of(
                  updateProductBooleanFail({
                    errorMessage: 'update product boolean failed',
                  })
                )
              )
            )
          )
      )
    );
  });
}

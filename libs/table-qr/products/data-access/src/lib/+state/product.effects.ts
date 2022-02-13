import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import {
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

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.loadDruids().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of(loadProductsFail({ error })))
        )
      )
    );
  });

  loadProductCategoryVice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsCategoryVice),
      switchMap(() => {
        return this.productService.loadProductsCategoryVice().pipe(
          map((productsByCat) =>
            loadProductsCategoryViceSuccess({ productsByCat })
          ),
          catchError((error) => of(loadProductsCategoryViceFail({ error })))
        );
      })
    );
  });
}

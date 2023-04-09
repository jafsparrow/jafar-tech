import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Organisation, Product } from '@jafar-tech/shared/data-access';
import { loadOrgInfoSuccess } from '@jafar-tech/table-qr/organisation/data-access';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ProductsService } from '../products.service';
import {
  addProduct,
  addProductFailure,
  addProductSuccess,
  addupdateProductInprogress,
  loadProductsCategoryVice,
  loadProductsCategoryViceFail,
  loadProductsCategoryViceSuccess,
  productsCategoryViceLoading,
  updateProduct,
  updateProductBooleanFail,
  updateProductBooleans,
  updateProductFail,
  updateProductSort,
  updateProductSuccess,
} from './product.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private productService: ProductsService,
    private actions$: Actions,
    private store: Store,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
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
      tap((data) => this.store.dispatch(addupdateProductInprogress())),
      switchMap((data) =>
        this.productService.addProduct(data.product).pipe(
          map((res) =>
            addProductSuccess({ organisation: res as Organisation })
          ),
          catchError((error) => {
            this.dialog.closeAll();
            return of(addProductFailure({ error: error }));
          })
        )
      )
    );
  });

  productAddSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProductSuccess),
      tap((data: any) => this.dialog.closeAll()),
      tap((data) => console.log(data)),
      tap((data: any) =>
        this._snackBar.open('A new product is added', 'close')
      ),

      switchMap((data) =>
        of(loadOrgInfoSuccess({ organisation: data.organisation }))
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

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProduct),
      tap((p) => console.log('updating product', p)),
      switchMap((payload) =>
        this.productService
          .updateProduct(payload.productId, payload.product)
          .pipe(
            map(
              (res) =>
                updateProductSuccess({ organisation: res as Organisation }),
              catchError((error) =>
                of(
                  updateProductFail({
                    errorMessage: 'update product boolean failed',
                  })
                )
              )
            )
          )
      )
    );
  });

  updateProductSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProductSuccess),
      tap((data: any) => this.dialog.closeAll()),
      tap((data: any) =>
        this._snackBar.open('Product has been updated successfully', 'close')
      ),

      switchMap((data) =>
        of(loadOrgInfoSuccess({ organisation: data.organisation }))
      )
    );
  });
}

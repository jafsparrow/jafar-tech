import { Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { loadOrgInfoSuccess } from '@jafar-tech/table-qr/organisation/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of } from 'rxjs';
import { CategoryService } from '../category.service';
import {
  addCategory,
  addCategoryFail,
  addCategorySuccess,
} from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}

  addCategoryEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategory),
      switchMap((payload) =>
        this.categoryService
          .addCategory(payload.companyId, payload.category)
          .pipe(
            map((res) =>
              addCategorySuccess({ organisation: res as Organisation })
            ),
            catchError((error) =>
              of(addCategoryFail({ errorMessage: 'Could not create category' }))
            )
          )
      )
    );
  });

  addCategorySuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategorySuccess),
      switchMap((payload) =>
        of(loadOrgInfoSuccess({ organisation: payload.organisation }))
      )
    );
  });
}

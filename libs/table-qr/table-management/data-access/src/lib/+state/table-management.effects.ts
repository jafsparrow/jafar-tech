import { Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { loadOrgInfoSuccess } from '@jafar-tech/table-qr/organisation/data-access';
import { TableManagementService } from '../table-management.service';
import {
  addTableSection,
  addTableSectionFail,
  addTableSectionSuccess,
  loadTables,
  loadTablesFail,
  loadTablesSuccess,
} from './table-management.actions';

@Injectable()
export class TableManagementEffects {
  constructor(
    private actions$: Actions,
    private tableManagementService: TableManagementService
  ) {}
  loadTableEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTables),
      tap((data) => console.log('inside effect')),
      switchMap((data) =>
        this.tableManagementService.getTables().pipe(
          map((tables) => loadTablesSuccess({ tables: tables })),
          catchError((error) => {
            console.log('error fired');
            return of(
              loadTablesFail({
                error: 'Something wrong happened while loading tables',
              })
            );
          })
        )
      )
    );
  });

  addTableSectionEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTableSection),
      switchMap((payload) =>
        this.tableManagementService
          .createTableSection(payload.tableSectionName)
          .pipe(
            map((res) =>
              addTableSectionSuccess({ organisation: res as Organisation })
            ),
            catchError((error) =>
              of(
                addTableSectionFail({
                  errorMessage: 'Could not create category',
                })
              )
            )
          )
      )
    );
  });

  addCategorySuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTableSectionSuccess),

      switchMap((payload) =>
        of(loadOrgInfoSuccess({ organisation: payload.organisation }))
      )
    );
  });
}

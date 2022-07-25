import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { TableManagementService } from '../table-management.service';
import {
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
}

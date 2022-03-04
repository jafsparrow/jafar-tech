import { Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { OrganisationService } from '../organisation.service';
import {
  loadOrgInfo,
  loadOrgInfoFail,
  loadOrgInfoSuccess,
} from './organisation.actions';

@Injectable()
export class OrganisationEffects {
  constructor(
    private actions$: Actions,
    private orgService: OrganisationService
  ) {}
  loadOrgEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadOrgInfo),
      switchMap((data) => {
        return this.orgService.getOrgDetails({ dd: '1' }).pipe(
          map((data: Organisation) =>
            loadOrgInfoSuccess({ organisation: data })
          ),
          catchError((error) => of(loadOrgInfoFail({ errorMessage: error })))
        );
      })
    );
  });
}

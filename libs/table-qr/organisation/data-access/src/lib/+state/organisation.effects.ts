import { Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
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
      switchMap((payload) => {
        return this.orgService.getOrgDetails(payload.organisationID).pipe(
          tap((data) => console.log(data)),
          map((data: Organisation) =>
            loadOrgInfoSuccess({ organisation: data })
          ),
          catchError((error) => of(loadOrgInfoFail({ errorMessage: error })))
        );
      })
    );
  });
}

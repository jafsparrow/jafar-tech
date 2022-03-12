import { Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { loadProductsSuccess } from '@jafar-tech/table-qr-products-data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
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
    private orgService: OrganisationService,
    private store: Store
  ) {}
  loadOrgEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadOrgInfo),
      switchMap((payload) => {
        console.log('load org effect fired');
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

  loadOrgSuccessEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadOrgInfoSuccess),
        tap((payload) => {
          console.log(
            'inside effect ' + JSON.stringify(payload.organisation.products)
          );

          this.store.dispatch(
            loadProductsSuccess({ products: payload.organisation!.products! })
          );
        })
      );
    },
    { dispatch: false }
  );
}

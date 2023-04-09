import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Organisation } from '@jafar-tech/shared/data-access';
import { loadTaxes } from '@jafar-tech/table-qr-cart-data-access';
import { loadProductsSuccess } from '@jafar-tech/table-qr-products-data-access';
import { loadCategoriesSuccess } from '@jafar-tech/table-qr/category/data-access/category';
import { loadTableSectionSuccess } from '@jafar-tech/table-qr/table-management/data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { OrganisationService } from '../organisation.service';
import {
  checkOrgRegistrationStatus,
  checkOrgRegistrationStatusFinished,
  loadOrgInfo,
  loadOrgInfoFail,
  loadOrgInfoSuccess,
  updateOrganisation,
  updateOrganisationFail,
  updateOrganisationSuccess,
} from './organisation.actions';
import { selectOrganisationRegistrationStatus } from './organisation.selectors';

@Injectable()
export class OrganisationEffects {
  constructor(
    private actions$: Actions,
    private orgService: OrganisationService,
    private store: Store,
    private router: Router
  ) {}
  loadOrgEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadOrgInfo),
      switchMap((payload) => {
        console.log('load org effect fired');
        return this.orgService.getOrgDetails(payload.organisationID).pipe(
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
        tap((payload) => console.log('org success payload', payload)),
        tap((payload) => {
          this.store.dispatch(
            loadProductsSuccess({ products: payload.organisation!.products! })
          );

          this.store.dispatch(
            loadCategoriesSuccess({
              categories: payload.organisation!.categories!,
            })
          );

          this.store.dispatch(
            loadTableSectionSuccess({
              tableSections: payload.organisation!.tableSections!,
            })
          );

          this.store.dispatch(
            loadTaxes({ taxes: payload.organisation!.taxes! })
          );
        })
      );
    },
    { dispatch: false }
  );

  checkOrgRegistrationStatusEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkOrgRegistrationStatus),
      switchMap((_) => this.store.select(selectOrganisationRegistrationStatus)),
      tap((isRegistrationComplete) => {
        console.log('am i running multipletimes');
        if (!isRegistrationComplete) {
          this.router.navigate(['org']);
        }
      }),
      map((_) => checkOrgRegistrationStatusFinished())
    );
  });

  updateOrganisationEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateOrganisation),
      switchMap((payload) =>
        this.orgService.updateOrgDetails(payload.organisation).pipe(
          map((res: Organisation) =>
            updateOrganisationSuccess({ organisation: res })
          ),
          catchError((error) =>
            of(
              updateOrganisationFail({
                errorMessage: 'Update Organisation Action failed',
              })
            )
          )
        )
      )
    );
  });
}

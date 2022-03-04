import { Organisation } from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const loadOrgInfo = createAction(
  '[Organisation] load org information',
  props<{ organisationID: any }>()
);
export const loadOrgInfoSuccess = createAction(
  '[Organisation] load info successfull',
  props<{ organisation: Organisation }>()
);
export const loadOrgInfoFail = createAction(
  '[Organisation] load info failed',
  props<{ errorMessage: string }>()
);

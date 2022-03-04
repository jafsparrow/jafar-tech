import { createAction, props } from '@ngrx/store';
import { Organisation } from './organisation.reducer';

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

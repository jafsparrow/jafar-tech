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

export const checkOrgRegistrationStatus = createAction(
  '[Organisation] check registration status'
);

// creating it for now, to get the effect related to working. as the effect need to return any of the Action type
export const checkOrgRegistrationStatusFinished = createAction(
  '[Organisation] check registration finished'
);

export const updateOrganisation = createAction(
  '[Organisation] update details',
  props<{ organisation: Organisation }>()
);

export const updateOrganisationSuccess = createAction(
  '[Organisation] update successfull',
  props<{ organisation: Organisation }>()
);

export const updateOrganisationFail = createAction(
  '[Organisation] update failed',

  props<{ errorMessage: string }>()
);

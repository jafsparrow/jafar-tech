import { Organisation } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  loadOrgInfoFail,
  loadOrgInfoSuccess,
  updateOrganisation,
  updateOrganisationFail,
  updateOrganisationSuccess,
} from './organisation.actions';

export const ORGANISATION_FEATURE_KEY = 'organisation';

export interface OrganisationState {
  organisation: Organisation | null;
  loadingIndicator: boolean;
  errorMEssage: string;
}
const initialState: OrganisationState = {
  organisation: null,
  errorMEssage: '',
  loadingIndicator: false,
};

export const orgReducer = createReducer(
  initialState,
  on(loadOrgInfoSuccess, (state, { organisation }) => ({
    ...state,
    organisation,
    errorMEssage: '',
    loadingIndicator: false,
  })),

  on(loadOrgInfoFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    loadingIndicator: false,
  })),
  on(updateOrganisation, (state, { organisation }) => ({
    ...state,
    errorMessage: '',
    loadingIndicator: true,
  })),
  on(updateOrganisationSuccess, (state, { organisation }) => ({
    ...state,
    errorMEssage: '',
    organisation: organisation,
    loadingIndicator: false,
  })),
  on(updateOrganisationFail, (state, { errorMessage }) => ({
    ...state,
    errorMEssage: errorMessage,
    loadingIndicator: false,
  }))
);

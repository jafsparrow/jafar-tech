import { createReducer, on } from '@ngrx/store';
import { loadOrgInfoFail, loadOrgInfoSuccess } from './organisation.actions';

export const ORGANISATION_FEATURE_KEY = 'organisation';

export interface OrganisationState {
  organisation: Organisation | null;
  errorMEssage: string;
}

export interface Organisation {
  name: string;
  caption: string;
  type: string[];
  address: string;
  coord: string[];
  license: string;
  openAllWeek: boolean;
  offDays: string[];
}

const initialState: OrganisationState = {
  organisation: null,
  errorMEssage: '',
};

export const orgReducer = createReducer(
  initialState,
  on(loadOrgInfoSuccess, (state, { organisation }) => ({
    ...state,
    organisation,
  })),

  on(loadOrgInfoFail, (state, { errorMessage }) => ({ ...state, errorMessage }))
);

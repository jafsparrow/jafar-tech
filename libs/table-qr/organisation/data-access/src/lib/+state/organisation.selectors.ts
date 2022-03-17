import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  OrganisationState,
  ORGANISATION_FEATURE_KEY,
} from './organisation.reducer';

export const selectOrganisationState = createFeatureSelector<OrganisationState>(
  ORGANISATION_FEATURE_KEY
);

export const selectOrganisationInfo = createSelector(
  selectOrganisationState,
  (state) => state.organisation
);

export const showOnlyAvailableItems = createSelector(
  selectOrganisationInfo,
  (state) => false
);

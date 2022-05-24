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

export const selectOrganisationId = createSelector(
  selectOrganisationInfo,
  (org) => org?._id
);

export const selectCurrencyCode = createSelector(
  selectOrganisationState,
  (state) => state.organisation?.currencyCode
)
export const showOnlyAvailableItems = createSelector(
  selectOrganisationInfo,
  (state) => false
);

export const canCustomerPlaceOrder = createSelector(
  selectOrganisationInfo,
  (org) => false
);
export const selectOrganisationRegistrationStatus = createSelector(
  selectOrganisationInfo,
  (org) => (org!.isRegistrationComplete ? org!.isRegistrationComplete : false)
);

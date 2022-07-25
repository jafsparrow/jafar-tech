import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TableState, TABLE_FEATURE_KEY } from './table-management.reducers';

export const selectTableState =
  createFeatureSelector<TableState>(TABLE_FEATURE_KEY);

export const selectAllTables = createSelector(
  selectTableState,
  (state) => state.tables
);

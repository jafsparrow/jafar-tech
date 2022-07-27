import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TableState, TABLE_FEATURE_KEY } from './table-management.reducers';

export const selectTableState =
  createFeatureSelector<TableState>(TABLE_FEATURE_KEY);

export const selectAllTables = createSelector(
  selectTableState,
  (state) => state.tables
);

export const selectSearchTerm = createSelector(
  selectTableState,
  (state) => state.searchTerm
);

export const filteredTables = createSelector(
  selectAllTables,
  selectSearchTerm,
  (tables, searchTerm) =>
    tables.filter((table) =>
      searchTerm ? table.id.toString().includes(searchTerm.toString()) : true
    )
);

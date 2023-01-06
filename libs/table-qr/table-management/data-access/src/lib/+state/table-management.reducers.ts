import { Table, TableSection } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  filterTable,
  loadTableSectionSuccess,
  loadTablesFail,
  loadTablesSuccess,
} from './table-management.actions';

export const TABLE_FEATURE_KEY = 'tables';

export interface TableState {
  tables: Table[];
  selectedTableId: number | null;
  searchTerm: number | null;
  errorMessage: string;
  tableSections?: TableSection[];
}

const initialState: TableState = {
  tables: [],
  selectedTableId: null,
  searchTerm: null,
  errorMessage: '',
  tableSections: [],
};

export const tableReducer = createReducer(
  initialState,
  on(loadTablesSuccess, (state, { tables }) => ({
    ...state,
    tables,
    errorMessage: '',
  })),
  on(loadTablesFail, (state, { error }) => ({ ...state, errorMessage: error })),
  on(filterTable, (state, { searchTerm }) => ({ ...state, searchTerm })),
  on(loadTableSectionSuccess, (state, { tableSections }) => ({
    ...state,
    tableSections,
  }))
);

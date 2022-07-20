import { Table } from '@jafar-tech/shared/data-access';
import { createReducer, on } from '@ngrx/store';
import { loadTablesFail, loadTablesSuccess } from './table-management.actions';

export const TABLE_FEATURE_KEY = 'tables';

export interface TableState {
  tables: Table[];
  selectedTableId: number | null;
  errorMessage: string;
}

const initialState: TableState = {
  tables: [],
  selectedTableId: null,
  errorMessage: '',
};

export const tableReducer = createReducer(
  initialState,
  on(loadTablesSuccess, (state, { tables }) => ({
    ...state,
    tables,
    errorMessage: '',
  })),
  on(loadTablesFail, (state, { error }) => ({ ...state, errorMessage: error }))
);

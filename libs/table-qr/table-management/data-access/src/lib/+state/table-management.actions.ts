import {
  Organisation,
  Table,
  TableSection,
} from '@jafar-tech/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const loadTables = createAction(
  '[Table Management] Load Organisation Tables'
);

export const loadTablesSuccess = createAction(
  '[Table Management] Load Organisation Tables Success',
  props<{ tables: Table[] }>()
);

export const loadTablesFail = createAction(
  '[Table Management] Load Organisation Tables Failed',
  props<{ error: string }>()
);

export const createTable = createAction(
  '[Table Management] Create Organisation Table',
  props<{ table: Table }>()
);

export const createTableSuccess = createAction(
  '[Table Management] Create Organisation Table Success'
);

export const udpateTable = createAction(
  '[Table Management] Update Organisation Table',
  props<{ table: Table }>()
);

export const createUpdateTableFail = createAction(
  '[Table Management] Create or Update Organisation Table Failed',
  props<{ error: string }>()
);

export const filterTable = createAction(
  '[Table Manangement] Filter Table',
  props<{ searchTerm: number }>()
);

export const loadTableSectionSuccess = createAction(
  '[Table Manangement] Load TableSection Success',
  props<{ tableSections: TableSection[] }>()
);

export const addTableSection = createAction(
  '[Table Manangement] add new TableSection',
  props<{ tableSectionName: string }>()
);

export const addTableSectionSuccess = createAction(
  '[Table Manangement] add TableSection success',
  props<{ organisation: Organisation }>()
);

export const addTableSectionFail = createAction(
  '[Table Manangement] add TableSection fail',
  props<{ errorMessage: string }>()
);

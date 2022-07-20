import { Table } from '@jafar-tech/shared/data-access';
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

export const udpateTable = createAction(
  '[Table Management] Update Organisation Table',
  props<{ table: Table }>()
);

export const createUpdateTableFail = createAction(
  '[Table Management] Create or Update Organisation Table Failed',
  props<{ error: string }>()
);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const tableQrTableManagementShellRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@jafar-tech/table-qr/table-management/features/table-list').then(
        (m) => m.TableQrTableManagementFeaturesTableListModule
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('@jafar-tech/table-qr/table-management/features/table-add').then(
        (m) => m.TableQrTableManagementFeaturesTableAddModule
      ),
  },

  {
    path: 'detail',
    loadChildren: () =>
      import(
        '@jafar-tech/table-qr/table-management/features/table-detail'
      ).then((m) => m.TableQrTableManagementFeaturesTableDetailModule),
  },
  {
    path: 'sections',
    loadChildren: () =>
      import(
        '@jafar-tech/table-qr/table-management/features/table-section-management'
      ).then(
        (m) => m.TableQrTableManagementFeaturesTableSectionManagementModule
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tableQrTableManagementShellRoutes),
  ],
})
export class TableQrTableManagementShellModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminContainerComponent,
      },
      {
        path: 'add',
        component: AdminContainerComponent,
        loadChildren: () =>
          import('@jafar-tech/table-qr/products/features/add').then(
            (m) => m.TableQrProductsFeaturesAddModule
          ),
      },
    ]),
    MatSidenavModule,
    MatListModule,
  ],
  declarations: [AdminContainerComponent],
})
export class TableAdminShellModule {}

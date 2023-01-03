import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const tableQrTableManagementShellRoutes: Route[] = [{
  path:'',loadChildren: () => import('@jafar-tech/table-qr/table-management/features/table-list').then(m => m.TableQrTableManagementFeaturesTableListModule), 
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(tableQrTableManagementShellRoutes)],
})
export class TableQrTableManagementShellModule {}

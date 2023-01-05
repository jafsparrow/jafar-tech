import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionManagementComponent } from './section-management/section-management.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SectionManagementComponent },
    ]),
  ],
  declarations: [SectionManagementComponent],
})
export class TableQrTableManagementFeaturesTableSectionManagementModule {}

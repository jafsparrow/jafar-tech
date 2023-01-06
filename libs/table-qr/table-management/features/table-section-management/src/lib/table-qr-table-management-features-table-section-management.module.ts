import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionManagementComponent } from './section-management/section-management.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SectionManagementComponent },
    ]),
    ReactiveFormsModule,
  ],
  declarations: [SectionManagementComponent],
})
export class TableQrTableManagementFeaturesTableSectionManagementModule {}

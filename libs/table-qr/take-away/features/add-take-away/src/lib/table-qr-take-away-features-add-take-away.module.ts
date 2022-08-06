import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTakeAwayComponent } from './add-take-away/add-take-away.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddTakeAwayComponent },
    ]),
  ],
  declarations: [AddTakeAwayComponent],
})
export class TableQrTakeAwayFeaturesAddTakeAwayModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';

import { ProductAddComponent } from './product-add/product-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ProductsDataAccessModule } from '@jafar-tech/table-qr-products-data-access';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild([{ path: '', component: ProductAddComponent }]),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    ProductsDataAccessModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ProductAddComponent],
  exports: [ProductAddComponent],
})
export class TableQrProductsFeaturesAddModule {}

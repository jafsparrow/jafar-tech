import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from './category-add/category-add.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatButtonModule,
  ],
  declarations: [CategoryAddComponent],
  exports: [CategoryAddComponent],
})
export class TableQrCategoryFeaturesAddModule {}

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { DAYS } from '@jafar-tech/shared/data-access';
import {
  addCategory,
  selectCategoryLoadingIndicator,
} from '@jafar-tech/table-qr/category/data-access/category';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'jafar-tech-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  selectCategoryLoadingIndicator$ = this.store.select(
    selectCategoryLoadingIndicator
  );
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedDays: string[] = [];
  days = DAYS;
  filterdDays$!: Observable<string[]>;

  @ViewChild('daysInput') daysInput!: ElementRef<HTMLInputElement>;

  categoryForm!: FormGroup;
  constructor(private _fbuilder: FormBuilder, private store: Store) {
    this.categoryForm = this._fbuilder.group({
      name: [''],

      description: [''],
      archived: [false],
      alwaysOpen: [true],
      day: [''],
      openTime: [''],
      closeTime: [''],
      openAllDay: [true],
      hours: [''],
    });
  }

  ngOnInit(): void {
    this.filterdDays$ = this.getDaysFormControl()!.valueChanges.pipe(
      startWith(null),
      map((day: string | null) =>
        day ? this._daysFilter(day) : this.days.slice()
      )
    );
  }

  getDaysFormControl() {
    return this.categoryForm.get('day');
  }

  get alwaysOpen() {
    return this.categoryForm.get('alwaysOpen')?.value;
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.selectedDays.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.getDaysFormControl()!.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedDays.indexOf(fruit);

    if (index >= 0) {
      this.selectedDays.splice(index, 1);
      (',');
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedDays.push(event.option.viewValue);
    this.daysInput.nativeElement.value = '';
    this.getDaysFormControl()!.setValue(null);
  }

  submitForm() {
    let newCategoryData = this.categoryForm.value;

    this.store.dispatch(addCategory({ category: newCategoryData }));
  }

  private _daysFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.days.filter((day) => day.toLowerCase().includes(filterValue));
  }
}

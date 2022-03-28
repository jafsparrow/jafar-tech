import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import {
  CountryCurrency,
  COUNTRY_LIST_JSON,
  DAYS,
} from '@jafar-tech/shared/data-access';
import {
  selectOrganisationInfo,
  updateOrganisation,
} from '@jafar-tech/table-qr/organisation/data-access';
import { Store } from '@ngrx/store';
import { map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'jafar-tech-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.css'],
})
export class OrgDetailComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  slectOrgInfo$ = this.store.select(selectOrganisationInfo);
  orgForm: FormGroup;
  countries: CountryCurrency[] = COUNTRY_LIST_JSON;
  selectedDays: string[] = [];
  days = DAYS;

  filteredOptions$!: Observable<CountryCurrency[]>;

  filterdDays$!: Observable<string[]>;

  @ViewChild('daysInput') daysInput!: ElementRef<HTMLInputElement>;

  subscirption!: Subscription;

  constructor(private store: Store, private _fb: FormBuilder) {
    this.orgForm = this._fb.group({
      _id: [''],
      name: ['', Validators.required],
      caption: ['Secret In the name'],
      phone: [''],
      addressLine1: [''],
      addressLine2: [''],
      pin: [''],
      country: [''],
      type: [''],
      openAllWeek: [true],
      offDays: [''],
    });

    this.slectOrgInfo$.subscribe((org) => {
      this.orgForm.patchValue(org!);
    });
  }

  ngOnInit(): void {
    this.filteredOptions$ = this.getCountryFormControl()!.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.filterdDays$ = this.getDaysFormControl()!.valueChanges.pipe(
      startWith(null),
      map((day: string | null) =>
        day ? this._daysFilter(day) : this.days.slice()
      )
    );
  }

  getCountryFormControl() {
    return this.orgForm.get('country');
  }
  getDaysFormControl() {
    return this.orgForm.get('offDays');
  }

  get openAllWeek() {
    return this.orgForm.get('openAllWeek')?.value;
  }

  toggle($event: HTMLInputElement) {
    $event.disabled ? ($event.disabled = false) : ($event.disabled = true);
    console.log($event.disabled);
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
    let orgDetails = this.orgForm.value;
    if (orgDetails.openAllWeek) {
      this.selectedDays = [];
    }
    let currencyCode = this.countries.filter(
      (item) => item.country == orgDetails.country
    )[0].currency_code;
    let updatedOrg = {
      ...orgDetails,
      offDays: this.selectedDays,
      currencyCode,
      isRegistrationComplete: true,
      phone: orgDetails.phone.toString(),
    };
    console.log(updatedOrg);
    this.store.dispatch(updateOrganisation({ organisation: updatedOrg }));
  }
  private _filter(value: string): CountryCurrency[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter((item) =>
      item.country.toLowerCase().includes(filterValue)
    );
  }

  private _daysFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.days.filter((day) => day.toLowerCase().includes(filterValue));
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountriesService } from '../countries.service';
import { FormControl } from '@angular/forms';
import { FormatedCountry } from '@jafar-tech/shared/data-access';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

@Component({
  selector: 'jafar-tech-countries-select',
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.scss'],
})
export class CountriesSelectComponent {
  countryForm = new FormControl('');
  @Input() value?: string;
  @Output() onChange: EventEmitter<CountrySelectValue> = new EventEmitter();

  countries!: FormatedCountry[];
  constructor(private countriesService: CountriesService) {
    this.countries = this.countriesService.getAll();
  }
}

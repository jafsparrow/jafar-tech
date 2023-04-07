import { Injectable } from '@angular/core';
import { FormatedCountry } from '@jafar-tech/shared/data-access';

import { countries } from 'countries-list';

const formattedCountries: FormatedCountry[] = Object.entries(
  countries
).map<FormatedCountry>(([code, country]) => ({
  name: country.name,
  isdCode: country.phone,
  currency: country.currency,
  countryCode: code,
}));

@Injectable()
export class CountriesService {
  constructor() {}
  getAll() {
    return formattedCountries;
  }
  getByValue(value: string) {
    return formattedCountries.filter(
      (country) => country.countryCode == value
    )[0];
  }
}

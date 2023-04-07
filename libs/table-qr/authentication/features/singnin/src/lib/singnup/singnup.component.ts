import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signUp } from '@jafar-tech/table-qr-authentication-data-access';
import { Store } from '@ngrx/store';

import {
  login,
  selectLoginErrorMessage,
  selectLoginProgressState,
} from '@jafar-tech/table-qr-authentication-data-access';
import { CountriesService } from '../countries.service';
import { FormatedCountry, User } from '@jafar-tech/shared/data-access';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'jafar-tech-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css'],
})
export class SingnupComponent implements OnInit {
  loginInProgressFlag$ = this.store.select(selectLoginProgressState);
  loginErrorMessage$ = this.store.select(selectLoginErrorMessage);
  signUpForm: FormGroup;
  isdCodeOfSelectedCountry: string = '33';
  constructor(
    private store: Store,
    private countriesService: CountriesService
  ) {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      businessName: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.countries = this.countriesService.getAll();
  }

  countries!: FormatedCountry[];

  ngOnInit(): void {}

  getIsdCodeOfSelectedCountry(countryCode: string) {
    this.isdCodeOfSelectedCountry =
      this.countriesService.getByValue(countryCode).isdCode;
  }

  onSubmit() {
    let user = this.signUpForm.value;
    user.country = this.countriesService.getByValue(user.country);
    user.lastName = '';

    this.store.dispatch(signUp(user));
  }
}

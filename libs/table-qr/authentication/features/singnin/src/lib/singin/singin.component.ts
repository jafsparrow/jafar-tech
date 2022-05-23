import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '@jafar-tech/shared/data-access';
import { login, selectLoginErrorMessage, selectLoginProgressState } from '@jafar-tech/table-qr-authentication-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
})
export class SinginComponent {
  loginInProgressFlag$ = this.store.select(selectLoginProgressState);
  loginErrorMessage$ = this.store.select(selectLoginErrorMessage)
  signInForm: FormGroup;

  constructor(private store: Store) {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),
    });
  }

  login() {
    const loginData: LoginData = this.signInForm.value;
    this.store.dispatch(login({ loginData }));
  }
}

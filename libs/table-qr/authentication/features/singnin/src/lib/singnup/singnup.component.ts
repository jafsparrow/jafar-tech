import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signUp } from '@jafar-tech/table-qr-authentication-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css'],
})
export class SingnupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private store: Store) {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signUpForm.value);
    let user = this.signUpForm.value;
    user.lastName = '';
    this.store.dispatch(signUp(user));
  }
}

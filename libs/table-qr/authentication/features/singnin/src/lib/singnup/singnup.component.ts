import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jafar-tech-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css'],
})
export class SingnupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}

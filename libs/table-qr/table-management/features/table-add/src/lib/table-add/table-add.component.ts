import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'jafar-tech-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.scss'],
})
export class TableAddComponent implements OnInit {
  isEdit: boolean = false;
  isLoading: boolean = true;
  tableAddForm!: FormGroup;
  sections = [
    {
      id: 111,
      value: 'lower floor no AC',
    },
    {
      id: 222,
      value: 'Lower Floor AC',
    },
  ];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((map) => console.log(map));
  }

  ngOnInit(): void {
    this.tableAddForm = new FormGroup({
      number: new FormControl(''),
      capacity: new FormControl(''),
      password: new FormControl(''),
      section: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.tableAddForm.value);
  }
}

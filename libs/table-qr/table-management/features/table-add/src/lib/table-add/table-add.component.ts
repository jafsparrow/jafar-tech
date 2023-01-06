import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  createTable,
  selectTableSections,
} from '@jafar-tech/table-qr/table-management/data-access';
import { Store } from '@ngrx/store';
import { TableValidatorService } from '../table-validator.service';

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

  tableSections$ = this.store.select(selectTableSections);
  constructor(
    private activatedRoute: ActivatedRoute,
    private validatorService: TableValidatorService,
    private store: Store
  ) {
    this.activatedRoute.paramMap.subscribe((map) => console.log(map));
  }

  ngOnInit(): void {
    this.tableAddForm = new FormGroup({
      tableNumber: new FormControl('', {
        asyncValidators: [
          this.validatorService.validate.bind(this.validatorService),
        ],
      }),
      capacity: new FormControl(''),
      password: new FormControl(''),
      section: new FormControl(''),
    });
  }
  onSubmit() {
    if (this.tableAddForm.valid) {
      this.store.dispatch(createTable({ table: this.tableAddForm.value }));
    }
    console.log(this.tableAddForm.value);
  }
}

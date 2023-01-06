import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addTableSection,
  selectTableSections,
} from '@jafar-tech/table-qr/table-management/data-access';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'jafar-tech-section-management',
  templateUrl: './section-management.component.html',
  styleUrls: ['./section-management.component.scss'],
})
export class SectionManagementComponent {
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

  selectTableSections$ = this.store.select(selectTableSections);
  tableSectionAddFrom!: FormGroup;

  constructor(private store: Store) {
    this.tableSectionAddFrom = new FormGroup({
      sectionName: new FormControl(''),
    });
  }

  onSubmit() {
    let value = this.tableSectionAddFrom.value;
    console.log(value);
    this.store.dispatch(
      addTableSection({ tableSectionName: value['sectionName'] })
    );
  }
}

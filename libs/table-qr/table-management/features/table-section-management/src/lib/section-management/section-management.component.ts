import { Component } from '@angular/core';

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
}

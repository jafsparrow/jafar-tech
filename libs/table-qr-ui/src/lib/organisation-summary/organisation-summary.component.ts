import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';

@Component({
  selector: 'qr-ui-organisation-summary',
  templateUrl: './organisation-summary.component.html',
  styleUrls: ['./organisation-summary.component.css'],
})
export class OrganisationSummaryComponent implements OnInit {
  @Input('organisation') org!: Organisation | null;

  constructor() {}

  ngOnInit(): void {}
}

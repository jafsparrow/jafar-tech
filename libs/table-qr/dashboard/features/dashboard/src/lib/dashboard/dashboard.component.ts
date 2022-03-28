import { Component, OnInit } from '@angular/core';
import { checkOrgRegistrationStatus } from '@jafar-tech/table-qr/organisation/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    // TODO- checking status in dashboard module only because after login success, this is the page is loaded. then the new user should be navigated to other page. which is done from the effect
    this.store.dispatch(checkOrgRegistrationStatus());
  }

  printME() {
    window.print();
  }
}

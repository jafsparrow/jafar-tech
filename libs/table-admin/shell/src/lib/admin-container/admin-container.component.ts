import { Component, OnInit } from '@angular/core';
import { loadProductsCategoryVice } from '@jafar-tech/table-qr-products-data-access';
import { loadOrgInfo } from '@jafar-tech/table-qr/organisation/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css'],
})
export class AdminContainerComponent implements OnInit {
  sideMenu: string[] = [
    'Dashboard',
    'Live Orders',
    'Orders',
    'Menus',
    'Customers',
    'Discounts',
  ];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadOrgInfo({ organisationID: '6226fba3209ec7f5ebd956e7' })
    );
  }

  onMenuChange($event: any) {
    console.log($event.options[0]._value);
  }
}

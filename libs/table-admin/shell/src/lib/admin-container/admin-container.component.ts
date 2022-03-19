import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadProductsCategoryVice } from '@jafar-tech/table-qr-products-data-access';
import { loadOrgInfo } from '@jafar-tech/table-qr/organisation/data-access';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';

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
  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.store.dispatch(loadOrgInfo({ organisationID: params['id'] }))
    );

    // this.store.dispatch(
    //   loadOrgInfo({ organisationID: '6226fba3209ec7f5ebd956e7' })
    // );
  }

  onMenuChange($event: any) {
    console.log($event.options[0]._value);
  }
}

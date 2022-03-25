import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import {
  logout,
  selectUserCompanyId,
} from '@jafar-tech/table-qr-authentication-data-access';
import { loadProductsCategoryVice } from '@jafar-tech/table-qr-products-data-access';
import { loadOrgInfo } from '@jafar-tech/table-qr/organisation/data-access';
import { Store } from '@ngrx/store';
import { Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'jafar-tech-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css'],
})
export class AdminContainerComponent implements OnInit, OnDestroy {
  sideMenu = [
    { name: 'Dashboard', navigate: 'dashboard' },
    { name: 'Orders', navigate: 'liveorder' },
    { name: 'menu', navigate: 'menu' },
    { name: 'createoder', navigate: 'create-order' },
  ];

  @ViewChild('drawer')
  drawer!: MatSidenav;

  companyId$ = this.store.select(selectUserCompanyId);
  subscription?: Subscription;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.companyId$
      .pipe(
        tap((id) => {
          console.log(id);
          this.store.dispatch(loadOrgInfo({ organisationID: id }));
        })
      )
      .subscribe();
  }

  onMenuChange($event: any) {
    console.log($event.options[0]._value);
    let menu: string = $event.options[0].value;
    this.router.navigate([menu.toLowerCase()]);
    this.drawer.toggle();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logout() {
    this.store.dispatch(logout());
  }
}

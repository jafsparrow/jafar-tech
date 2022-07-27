import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Table, User, UserType } from '@jafar-tech/shared/data-access';
import { setCartCreatedForUser } from '@jafar-tech/table-qr-cart-data-access';
import {
  filteredTables,
  filterTable,
} from '@jafar-tech/table-qr/table-management/data-access';
import { Store } from '@ngrx/store';
import { tap, startWith, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'jafar-tech-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css'],
})
export class TableSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  filterdTables$: Observable<Table[]> = this.store.select(filteredTables);
  formValueSubscription!: Subscription;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.formValueSubscription = this.searchControl.valueChanges
      .pipe(startWith(''))
      .subscribe((term) =>
        this.store.dispatch(
          filterTable({ searchTerm: term as unknown as number })
        )
      );
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
  }

  onSelectionChange(event: any, table: Table) {
    console.log(table);
    // creat a table user out of this data and use cart data access module to set the createdFor user

    const cartCreatedForUser: User = {
      firstName: `Table ${table.id}`,
      username: table.id.toString(),
      userType: UserType.TABLE,
    };

    this.store.dispatch(setCartCreatedForUser({ user: cartCreatedForUser }));
  }
}

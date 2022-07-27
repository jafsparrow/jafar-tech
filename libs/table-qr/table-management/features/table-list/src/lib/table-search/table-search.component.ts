import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Table } from '@jafar-tech/shared/data-access';
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
}

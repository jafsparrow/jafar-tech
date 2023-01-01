import { Component, OnInit } from '@angular/core';
import {
  loadTables,
  selectAllTables,
} from '@jafar-tech/table-qr/table-management/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  tables$ = this.store.select(selectAllTables);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tables$.subscribe((tables) => console.log(tables));
  }
  openCreateTable(){}
}

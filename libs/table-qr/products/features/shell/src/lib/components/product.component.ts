import { Component, OnInit } from '@angular/core';
import {
  loadProducts,
  loadProductsCategoryVice,
} from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'table-qr-products-shell',
  styles: [],
  template: ` <router-outlet></router-outlet> `,
})
export class ProductComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    // this.store.dispatch(loadProducts());
    // this.store.dispatch(loadProductsCategoryVice());
  }
}

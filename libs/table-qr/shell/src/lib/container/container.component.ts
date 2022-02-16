import { Component, OnInit } from '@angular/core';
import { selectNumberOfItemsInCart } from '@jafar-tech/table-qr-cart-data-access';
import { loadProductsCategoryVice } from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  cartCount$ = this.store.select(selectNumberOfItemsInCart);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProductsCategoryVice());
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { selectNumberOfItemsInCart } from '@jafar-tech/table-qr-cart-data-access';
import { loadProductsCategoryVice } from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  cartCount$ = this.store.select(selectNumberOfItemsInCart);

  constructor(private store: Store) {}
  ngOnDestroy(): void {
    console.log('on destroy fired in shell container component');
  }

  ngOnInit(): void {
    console.log('shell module on init');
    this.store.dispatch(loadProductsCategoryVice());
  }
}

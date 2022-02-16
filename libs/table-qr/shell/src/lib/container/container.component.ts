import { Component, OnInit } from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';
import {
  addToCart,
  selectCart,
  removeFromCart,
  selectInCartProductCount,
  selectNumberOfItemsInCart,
  selectCartTotal,
} from '@jafar-tech/table-qr-cart-data-access';
import {
  loadProducts,
  loadProductsCategoryVice,
  selectAllProducts,
  selectProductByCategories,
} from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'jafar-tech-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  cartCount$ = this.store.select(selectNumberOfItemsInCart);

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('inste oninit of container component');
    this.store.dispatch(loadProductsCategoryVice());
  }
}

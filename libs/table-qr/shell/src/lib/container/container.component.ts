import { Component, OnInit } from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';
import { addToCart, selectCart } from '@jafar-tech/table-qr-cart-data-access';
import {
  loadProducts,
  loadProductsCategoryVice,
  selectAllProducts,
  selectProductByCategories,
  selectProductconsideringcart,
} from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  allProducts$ = this.store.select(selectAllProducts);
  prodcutByCategory$ = this.store.select(selectProductByCategories);
  cart$ = this.store.select(selectCart);

  count = 5;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadProductsCategoryVice());
  }

  openProductViewDialog() {}

  addToCart(product: Product) {
    const cartItem = {
      product: product,
      count: 1,
    };
    this.store.dispatch(addToCart({ item: cartItem }));
  }
}

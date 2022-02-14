import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  loadProducts,
  loadProductsCategoryVice,
  selectAllProducts,
  selectProductByCategories,
} from '@jafar-tech/table-qr-products-data-access';
import { addToCart, selectCart } from '@jafar-tech/table-qr-cart-data-access';
import { CartItem } from '@jafar-tech/shared/data-access';

@Component({
  selector: 'jafar-tech-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  allProducts$ = this.store.select(selectAllProducts);
  prodcutByCategory$ = this.store.select(selectProductByCategories);
  cart$ = this.store.select(selectCart);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    // this.prodcutByCategory$.subscribe((data) => console.log(data));
  }
  addToCart(product: any) {
    console.log(product);
    const count = 5;
    var cartItem: CartItem = {
      product,
      count,
    };
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  openProductViewDialog() {}
}

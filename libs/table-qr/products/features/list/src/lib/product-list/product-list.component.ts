import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectProductByCategories } from '@jafar-tech/table-qr-products-data-access';
import {
  addToCart,
  removeFromCart,
  selectCartTotal,
  selectInCartProductCount,
  selectNumberOfItemsInCart,
} from '@jafar-tech/table-qr-cart-data-access';
import { CartItem, Product } from '@jafar-tech/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'jafar-tech-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  prodcutByCategory$ = this.store.select(selectProductByCategories);
  cartCount$ = this.store.select(selectNumberOfItemsInCart);
  cartTotal$ = this.store.select(selectCartTotal);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store.dispatch(loadProducts());
    // this.store.dispatch(loadProductsCategoryVice());

    this.prodcutByCategory$.subscribe((data) => console.log(data));
  }

  getInCartProductCount(product: Product): Observable<any> {
    return this.store.select(selectInCartProductCount, { id: product._id });
  }
  openProductViewDialog() {}

  addToCart(product: Product) {
    const cartItem = {
      product: product,
      count: 1,
    };
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  removeFromCart(product: Product) {
    const cartItem = {
      product: product,
      count: 1,
    };

    this.store.dispatch(removeFromCart({ itemId: product._id }));
  }
}

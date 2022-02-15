import { Component, OnInit } from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';
import {
  addToCart,
  selectCart,
  removeFromCart,
  selectInCartProductCount,
  selectNumberOfItemsInCart,
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
  allProducts$ = this.store.select(selectAllProducts);
  prodcutByCategory$ = this.store.select(selectProductByCategories);
  cartCount$ = this.store.select(selectNumberOfItemsInCart);

  count = 5;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadProductsCategoryVice());
    this.cartCount$.subscribe((count) => console.log(count));
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

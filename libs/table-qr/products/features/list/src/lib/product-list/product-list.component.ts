import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectProductByCategories,
  selectProductFetchInProgressFlag,
} from '@jafar-tech/table-qr-products-data-access';
import {
  addToCart,
  removeFromCart,
  selectCartTotal,
  selectInCartProductCount,
  selectNumberOfItemsInCart,
} from '@jafar-tech/table-qr-cart-data-access';
import { CartItem, Product } from '@jafar-tech/shared/data-access';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '@jafar-tech/table-qr/products/features/detail';

@Component({
  selector: 'jafar-tech-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  prodcutByCategory$ = this.store.select(selectProductByCategories);
  productFetachInProgess$ = this.store.select(selectProductFetchInProgressFlag);
  cartCount$ = this.store.select(selectNumberOfItemsInCart);
  cartTotal$ = this.store.select(selectCartTotal);

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.prodcutByCategory$.subscribe((data) => console.log(data));
    console.log('on init fired');
  }

  getInCartProductCount(product: Product): Observable<any> {
    return this.store.select(selectInCartProductCount, { id: product._id });
  }
  openProductViewDialog(product: Product) {
    this.dialog.open(ProductDetailComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        product,
      },
    });
  }

  addToCart(product: Product) {
    const cartItem = {
      product: product,
      count: 1,
    };
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  // removeFromCart(product: Product) {
  //   const cartItem = {
  //     product: product,
  //     count: 1,
  //   };

  //   this.store.dispatch(removeFromCart({ itemId: product._id }));
  // }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  addToCart,
  removeFromCart,
  selectInCartProductCount,
} from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';

import { Product } from '@jafar-tech/shared/data-access';
import { Observable } from 'rxjs';

export interface DialogData {
  product: Product;
}

@Component({
  selector: 'jafar-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productInTheCartAlready$: Observable<number | null>;
  constructor(
    private router: Router,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private dialog: MatDialog
  ) {
    this.productInTheCartAlready$ = this.store.select(
      selectInCartProductCount,
      {
        id: this.dialogData.product._id,
      }
    );
  }

  get selectedProduct() {
    return this.dialogData.product;
  }

  ngOnInit(): void {}

  closeButtonClicked() {
    this.dialog.closeAll();
  }

  addToCart(count: number) {
    if (count) {
      const cartItem = {
        product: this.selectedProduct,
        count: count,
      };
      this.store.dispatch(addToCart({ item: cartItem }));
    } else {
      this.store.dispatch(removeFromCart({ itemId: this.selectedProduct._id }));
    }
    this.dialog.closeAll();
  }
}

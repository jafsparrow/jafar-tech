import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  addToCart,
  removeFromCart,
  selectInCartProductCount,
} from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';

import { CartItem, Modifier, Product } from '@jafar-tech/shared/data-access';
import { Observable } from 'rxjs';
import { canCustomerPlaceOrder } from '@jafar-tech/table-qr/organisation/data-access';

export interface DialogData {
  product: Product;
  isEdit?: boolean;
  category?: string;
  categories?: string[];
}

@Component({
  selector: 'jafar-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  canCustomerPlaceOrder$ = this.store.select(canCustomerPlaceOrder);

  productInTheCartAlready$: Observable<number | null>;

  count: number = 1;

  selectedModifiers: { [Key: number]: Modifier } = {};
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
      const cartItem: CartItem = {
        product: this.selectedProduct,
        count: count,
        modifiers: Object.values(this.selectedModifiers),
      };
      this.store.dispatch(addToCart({ item: cartItem }));
    } else {
      this.store.dispatch(removeFromCart({ itemId: this.selectedProduct._id }));
    }
    this.dialog.closeAll();
  }

  modifierSelectionUpdate($event: any) {
    this.selectedModifiers[$event.group] = $event.modifier;
    console.log(this.selectedModifiers);
  }

  productTotalWhenAddedModifier() {
    return (
      (this.selectedProduct.price +
        Object.values(this.selectedModifiers).reduce(
          (prev, curr) => prev + parseInt(curr?.price.toString()),
          0
        )) *
      this.count
    );
  }

  onCountChange($event: number) {
    this.count = $event;
    console.log(this.count);
  }
}

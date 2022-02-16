import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import {
  addToCart,
  removeFromCart,
  selectCart,
} from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(selectCart);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  getCartItems(cart: Cart) {
    return Object.values(cart.cartItems);
  }

  productCountChange($event: any, cartItem: CartItem) {
    var newCount = $event;
    // console.log('newcount', newCount);
    if (newCount) {
      this.store.dispatch(
        addToCart({ item: { ...cartItem, count: newCount } })
      );
    } else {
      alert(
        `Are you sure, don't want ${cartItem.product.name} in the cart..? `
      );
      this.store.dispatch(removeFromCart({ itemId: cartItem.product._id }));
    }
  }
}

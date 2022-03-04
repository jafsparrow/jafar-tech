import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import {
  addToCart,
  placeOrder,
  placeOrderTurnSpinnerOn,
  removeFromCart,
  selectCart,
  selectPlaceOrderSpinner,
} from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(selectCart);
  placeOrderSpinner$ = this.store.select(selectPlaceOrderSpinner);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  getCartItems(cart: Cart) {
    return Object.values(cart.cartItems);
  }

  getCartItemTotal(cartItem: CartItem): number {
    return (
      (cartItem.modifiers!.reduce(
        (prev, curr) => prev + parseInt(curr.price?.toString()),
        0
      ) +
        cartItem.product.price) *
      cartItem.count
    );
  }

  productCountChange($event: any, cartItem: CartItem) {
    var newCount = $event;
    // console.log('newcount', newCount);

    if (newCount) {
      this.store.dispatch(
        addToCart({
          item: { ...cartItem, count: newCount > cartItem.count ? 1 : -1 },
        })
      );
    } else {
      var key = '';
      cartItem.modifiers?.forEach(
        (modifier) => (key = key + modifier.id?.toString())
      );

      var generatedId = `${cartItem.product._id}${key}`;
      alert(
        `Are you sure, don't want ${cartItem.product.name} in the cart..? `
      );
      console.log('geenrated key i ncomponent', cartItem.product._id + key);
      this.store.dispatch(removeFromCart({ itemId: generatedId }));
    }
  }

  placeOrder(cart: Cart) {
    this.store.dispatch(placeOrderTurnSpinnerOn());
    this.store.dispatch(placeOrder({ cart }));
  }
}

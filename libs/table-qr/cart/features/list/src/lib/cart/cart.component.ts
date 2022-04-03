import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import {
  addToCart,
  removeFromCart,
  selectCart,
  selectCartTaxed,
} from '@jafar-tech/table-qr-cart-data-access';
import {
  placeOrder,
  placeOrderTurnSpinnerOn,
  selectOrderErrorMessage,
  selectPlaceOrderSpinner,
} from '@jafar-tech/table-qr-orders-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  routeLink = '../products';
  cart$ = this.store.select(selectCartTaxed);
  placeOrderSpinner$ = this.store.select(selectPlaceOrderSpinner);
  orderPlaceSateMessage$ = this.store.select(selectOrderErrorMessage);
  constructor(private store: Store, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data: any) =>
      data.menuURL ? (this.routeLink = data.menuURL) : ''
    );
  }

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

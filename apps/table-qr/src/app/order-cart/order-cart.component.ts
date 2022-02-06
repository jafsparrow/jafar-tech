import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Cart,
  CartService,
  Product,
} from '../services/cart-service/cart.service';

@Component({
  selector: 'jafar-tech-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
})
export class OrderCartComponent implements OnInit, OnDestroy {
  count!: number;
  $cart: Observable<Cart>;

  constructor(private cartService: CartService) {
    this.$cart = this.cartService.cartSubject.asObservable();
  }

  ngOnInit(): void {
    // this.count = this.sampleCart['333'];
  }

  getProducts() {
    this.cartService.genCart();
  }

  ngOnDestroy(): void {}
}

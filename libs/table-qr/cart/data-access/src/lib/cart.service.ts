import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [
    {
      product: { id: '1234', name: 'Evan', price: 33, type: 'none' },
      count: 5,
    },
    {
      product: { id: '1235', name: 'Chau', price: 44, type: 'none' },
      count: 2,
    },
  ];

  CART: Cart = {
    total: 33,
    cartItems: this.cartItems,
  };
  constructor(private httpClient: HttpClient) {}

  loadCart(): Observable<Cart> {
    return of(this.CART);
  }
}

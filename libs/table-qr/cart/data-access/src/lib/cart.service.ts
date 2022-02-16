import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CART: Cart = {
    cartItems: {},
  };
  constructor(private httpClient: HttpClient) {}

  loadCart(): Observable<Cart> {
    return of(this.CART);
  }
}

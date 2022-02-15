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
      product: {
        _id: '1234',
        name: 'Evan',
        price: 33,
        category: 'juice',
        isAvailable: true,
        onSale: true,
        image: '',
        description: 'ehllosdfsdf',
        archived: true,
        popular: true,
      },
      count: 5,
    },
    {
      product: {
        _id: '1235',
        name: 'Chau',
        price: 44,
        category: 'chicken',
        isAvailable: true,
        onSale: true,
        image: '',
        description: 'ehllosdfsdf',
        archived: true,
        popular: true,
      },
      count: 2,
    },
  ];

  CART: Cart = {
    total: 33,
    cartItems: {},
  };
  constructor(private httpClient: HttpClient) {}

  loadCart(): Observable<Cart> {
    return of(this.CART);
  }
}

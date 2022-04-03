import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Cart } from '@jafar-tech/shared/data-access';

@Injectable()
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}
  placeOrder(cart: Cart) {
    console.log('place order fucntion fired', cart);

    let order = {
      user: {
        firstName: 'table3',
        lastName: 'table3',
        userName: 'table3',
        type: 'table',
      },
      cartItems: cart.cartItems,
    };
    return this.httpClient.post(`${this.apiUrl}/orders`, order);
  }
}

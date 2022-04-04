import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Cart } from '@jafar-tech/shared/data-access';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}
  placeOrder(cart: Cart) {
    console.log('place order fucntion fired', cart);
    return this.httpClient.post(`${this.apiUrl}/orders`, cart);
  }
}

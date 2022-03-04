import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, CartItem } from '@jafar-tech/shared/data-access';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CART: Cart = {
    cartItems: {},
    placeOrderSpinner: false,
  };
  constructor(
    private httpClient: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}

  loadCart(): Observable<Cart> {
    return of(this.CART);
  }

  placeOrder(cart: Cart) {
    console.log('place order fucntion fired', cart);
    let order2 = JSON.parse(`{
      "user": {
          "firstName":"table7",
          "lastName":"table7",
          "userName": "table7",
          "type": "table"
  
      },
      "cartItems": {
          "firstKey": {
              "product": {"names": "Heldsflo", "price": 30},
              "count": 1,
              "modifiers": [
                  {"description": "Hisdfguita shit", "price":10},
                  { "description": "super duper shit", "price": 5}
              ]
          }
      },
      "names":  {}
  }`);

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

    // return this.httpClient.post('http://localhost:3335/api/products', cart);
    // return of('sucess');
  }
}

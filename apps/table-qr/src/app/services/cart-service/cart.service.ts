import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  cartSubject = new BehaviorSubject<Cart>({ totalAmout: 0, items: [] });

  constructor() {}

  genCart() {
    const randInt = Math.floor(Math.random() * 10) + 1;
    console.log(randInt);
    const newProduct = products[randInt];
    // console.log(newProduct);
    var newItem: CartItem = { ...newProduct, count: 5 };
    console.log(newItem);
    var newCartItems = [...this.cartItems, newItem];
    console.log(this.cartItems, newCartItems);
    var newtotal = 0;
    console.log(newtotal);
    newCartItems.forEach((item) => {
      console.log(item.price, item.count);
      newtotal = newtotal + item.count * item.price;
      console.log(newtotal);
    });

    var newCart: Cart = {
      totalAmout: newtotal,
      items: newCartItems,
    };
    console.log(newCart);
    this.cartItems = newCartItems;
    this.cartSubject.next(newCart);
  }
}
export interface Product {
  name: string;
  price: number;
}

export interface CartItem {
  name: string;
  price: number;
  count: number;
}

export interface Cart {
  totalAmout: number;
  items: CartItem[];
}

var products = [
  {
    name: 'Branden Flores',
    price: 97,
  },
  {
    name: 'Burke Jarvis',
    price: 42,
  },
  {
    name: 'Serena Carr',
    price: 104,
  },
  {
    name: 'Skyler Wilder',
    price: 109,
  },
  {
    name: 'Paki Hebert',
    price: 82,
  },
  {
    name: 'Branden Flores',
    price: 97,
  },
  {
    name: 'Burke Jarvis',
    price: 42,
  },
  {
    name: 'Serena Carr',
    price: 104,
  },
  {
    name: 'Skyler Wilder',
    price: 109,
  },
  {
    name: 'Paki Hebert',
    price: 82,
  },
];

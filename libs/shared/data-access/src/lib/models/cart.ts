import { Product } from '.';

export interface CartItem {
  product: Product;
  count: number;
}

export interface Cart {
  createdAt?: Date;
  cartItems: CartItem[];
  total: number;
}

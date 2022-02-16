import { Modifier, Product } from '.';
import { User } from './user';

export interface CartItem {
  product: Product;
  count: number;
  modifiers?: Modifier[];
}

export interface Cart {
  createdAt?: Date;
  user?: User;
  cartItems: { [key: string]: CartItem };

  pendingOders?: OrderSummary[];
}

export interface OrderSummary {
  _id: string;
  date?: Date;
}

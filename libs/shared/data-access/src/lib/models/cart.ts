import { Product } from '.';
import { User } from './user';

export interface CartItem {
  product: Product;
  count: number;
}

export interface Cart {
  createdAt?: Date;
  user?: User;
  cartItems: { [key: string]: CartItem };
  pendingOders?: OrderSummary[];
  total: number;
}

export interface OrderSummary {
  _id: string;
  date?: Date;
}

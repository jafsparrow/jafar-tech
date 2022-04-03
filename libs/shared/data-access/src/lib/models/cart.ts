import { Modifier, Product } from './product';
import { Tax } from './taxes';
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
  placeOrderSpinner: boolean;
  createdBy?: User;
  taxes?: Tax[];
}

import { CartItem } from './cart';
import { User } from './user';
export interface OrderItem extends CartItem {
  status: OrderItemStatus;
  kitchenUser?: User;
}

export interface OrderSummary {
  _id: string;
  date?: Date;
  status: OrderStatus;
  orderItems: OrderItem[];
  user?: User;
}

export interface AppliedTax {
  name: string;
  taxValue: number;
}

export enum OrderItemStatus {
  READY = 'ready',
  INPROGRESS = 'inprogress',
  WAITING = 'waiting',
}

export enum OrderStatus {
  PLACED = 'placed',
  INPROGRESS = 'inprogress',
  SERVED = 'served',
  PAID = 'paid',
}

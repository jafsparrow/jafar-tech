import { CartItem } from './cart';
import { User } from './user';
export interface OrderItem extends CartItem {
  status: OrderItemStatus;
  kitchenUser?: User;
  key?: string;
  totalCountOfSameItem?: number;
  orderId?: string; //just to track what order it belongs.
  orderItemType?: OrderItemType;
}

export interface OrderSummary {
  _id: string;
  orderId?: number;
  date?: Date;
  status: OrderStatus;
  orderItems: OrderItem[];
  createdBy?: User;
  createdFor?: User;
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
  READY = 'ready',
  SERVED = 'served',
  PAID = 'paid',
}

export enum OrderItemType {
  NEW = 'new',
  RUNNING = 'running',
}

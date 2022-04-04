import {
  OrderItem,
  OrderItemStatus,
  OrderStatus,
  User,
} from '@jafar-tech/shared/data-access';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  createOrder(orderDto: CreateOrderDto, appUser: User) {
    let orderItems: OrderItem[] = Object.values(orderDto.cartItems).map(
      (item) => ({ ...item, status: OrderItemStatus.WAITING })
    );
    let newOrder = {
      user: appUser,
      total: orderDto.total,
      taxedTotal: orderDto.taxedTotal,
      orderItems: orderItems,
      status: OrderStatus.PLACED,
      note: orderDto.note,
    };

    this.orderRepository.createOrder(newOrder);
    // console.log(newOrder);
  }
}

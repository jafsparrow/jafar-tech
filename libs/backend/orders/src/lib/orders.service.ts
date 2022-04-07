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
    let orderItems: OrderItem[] = Object.keys(orderDto.cartItems).map(
      (key) => ({
        ...orderDto.cartItems[key],
        key,
        status: OrderItemStatus.WAITING,
      })
    );

    // TODO - cloned user is to get company Id as company as in the order schema company is mentioned.
    let cloneUser = { ...appUser, company: appUser.companyId };

    let newOrder = {
      user: cloneUser,
      total: orderDto.total,
      taxedTotal: orderDto.taxedTotal,
      orderItems: orderItems,
      status: OrderStatus.PLACED,
      note: orderDto.note,
    };

    this.orderRepository.createOrder(newOrder);
  }

  async findOrdersOfTheday() {
    return await this.orderRepository.findOrderOfTheDay();
  }

  updateOrderStatus(orderId: string, status: OrderStatus) {
    return this.orderRepository.updateOrderStatus(orderId, status);
  }

  updateOrderItemStatus(
    orderId: string,
    orderItemKey: string,
    status: OrderItemStatus
  ) {
    // if all the orderItem ready, make the order ready.
    // if any of the ordertiem updated to in progress, make the whole order inprogress.
  }
}

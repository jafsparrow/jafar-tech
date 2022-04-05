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

    // TODO - cloned user is to get company Id as company as in the order schema company is mentioned.
    let cloneUser = { ...appUser, company: appUser.companyId };

    console.log('appUser', cloneUser);
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
}

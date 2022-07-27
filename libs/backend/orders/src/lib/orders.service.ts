import {
  OrderItem,
  OrderItemStatus,
  OrderStatus,
  User,
} from '@jafar-tech/shared/data-access';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderItemStatusDto } from './dto/update-order-item-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
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
    console.log(orderItems);

    // TODO - check if the given table has any order which is not in PAID status.
    // if so update the order with new order items with status as RUNNING.
    // else create a new Order with orderItem status as NEW.

    // TODO - cloned user is to get company Id as company as in the order schema company is mentioned.
    let cloneUser = { ...appUser, company: appUser.companyId };

    let newOrder = {
      createdBy: cloneUser,
      createdFor: orderDto.cartCreatedFor,
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

  updateOrderStatus(updatingUser: User, data: UpdateOrderStatusDto) {
    return this.orderRepository.updateOrderStatus(updatingUser, data);
  }

  updateOrderItemStatus(updatingUser: User, data: UpdateOrderItemStatusDto) {
    return this.orderRepository.updateOrderItemStatus(updatingUser, data);
  }
}

import {
  OrderItem,
  OrderItemStatus,
  OrderItemType,
  OrderStatus,
  OrderSummary,
  User,
} from '@jafar-tech/shared/data-access';
import { ConflictException, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderItemStatusDto } from './dto/update-order-item-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { Order } from './models/order.schema';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(orderDto: CreateOrderDto, appUser: User) {
    let orderItems: OrderItem[] = Object.keys(orderDto.cartItems).map(
      (key) => ({
        ...orderDto.cartItems[key],
        key,
        status: OrderItemStatus.WAITING,
        orderItemType: OrderItemType.NEW,
      })
    );
    // console.log(orderItems);

    const existingNonPaidOrdersForTheTable =
      await this.orderRepository.getNotPaidOrdersForTheTable(
        orderDto.cartCreatedFor.username
      );

    if (existingNonPaidOrdersForTheTable.length > 1) {
      throw new ConflictException(
        'Table cannot have more than one non paid orders'
      );
    }

    const existingOrder: Order = existingNonPaidOrdersForTheTable[0];

    if (existingOrder) {
      //  update the order with order item marked as running.
      let updatedOrderItems = orderItems.map((item) => ({
        ...item,
        orderItemType: OrderItemType.RUNNING,
      }));

      let orderDataToUpdate = {
        total: parseInt(orderDto.total.toString()) + existingOrder.total,
        taxedTotal:
          parseInt(orderDto.taxedTotal.toString()) + existingOrder.taxedTotal,
        orderItems: [...existingOrder.orderItems, ...updatedOrderItems],
        note: orderDto.note + existingOrder.note,
      };

      return await this.orderRepository.updateOrder(
        existingOrder._id as unknown as ObjectId,
        orderDataToUpdate
      );
    }

    //  at this point the table does not have any existing non paid orders
    let cloneUser = { ...appUser, company: appUser.companyId };

    let newOrder = {
      createdBy: cloneUser,
      createdFor: orderDto.cartCreatedFor,
      total: orderDto.total,
      taxedTotal: orderDto.taxedTotal,
      orderItems: orderItems,
      status: OrderStatus.PLACED,
      note: orderDto.note,
      taxesApplied: orderDto.taxesApplied,
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

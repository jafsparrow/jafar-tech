import { Organisation } from '@jafar-tech/backend/organisation';
import {
  OrderItemStatus,
  OrderStatus,
  User,
} from '@jafar-tech/shared/data-access';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose, ObjectId, Types } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderItemStatusDto } from './dto/update-order-item-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { Order } from './models/order.schema';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name)
    private readonly order: Model<Order>,
    @InjectModel(Organisation.name)
    private readonly organsationModel: Model<Organisation>
  ) {}

  getOrders() {
    // return this.product.create({ name: 'hello' });
    // this.product.aggregate().project({array: [{
    //   k:"category",
    //   v
    // }]})
    return this.order.find().sort('category').exec();
  }

  async getNotPaidOrdersForTheTable(tableId: string) {
    const orderForTable = await this.order
      .find()
      .where({
        'createdFor.username': tableId,
        status: { $ne: OrderStatus.PAID },
      })
      .exec();
    console.log('existing order', orderForTable);
    return orderForTable;
  }

  async createOrder(order: any) {
    const orderId: number = await this._getNextOrderSequence(
      order.createdBy.companyId
    );
    const orderWithId = { ...order, orderId };
    console.log('orderid', orderWithId.orderId);
    const newProduct = new this.order(orderWithId);
    try {
      return await newProduct.save();
    } catch (e) {
      console.log(e);
    }
  }

  async updateOrder(existingOrderId: ObjectId, orderUpdateData: any) {
    console.log('order update data', orderUpdateData);

    return this.order.updateOne({ _id: existingOrderId }, orderUpdateData);
    // return await this.order
    //   .findOneAndUpdate(existingOrderId, orderUpdateData)
    //   .exec();
  }

  async findOrderOfTheDay() {
    // return await this.order.find();
    let date = new Date('20 March 2020'); //new Date(new Date().setUTCHours(0, 0, 0, 0));

    try {
      return await this.order
        .aggregate([
          {
            $match: {
              createdAt: {
                $gt: date,
              },
            },
          },
        ])
        .sort('-createdAt');
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async updateOrderStatus(updatingUser: User, data: UpdateOrderStatusDto) {
    try {
      let order = await this.order.findById(data.orderId);
      order.status = data.status;
      order.lastUpdatedBy = updatingUser.firstName;
      // if the order status is ready, make all the order item status to ready.

      await order.save();
      return await this.findOrderOfTheDay();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async updateOrderItemStatus(
    updatingUser: User,
    data: UpdateOrderItemStatusDto
  ) {
    try {
      let order = await this.order.findById(data.orderId);
      let currentOrderItems = order.orderItems;
      let isAllOrderItemInReadyStatus = false;
      let mapedOrderItems = currentOrderItems.map((item) => {
        if (item.key == data.key) {
          item = {
            ...item,
            status: data.orderItemStatus,
            kitchenUser: updatingUser,
          };
        }
        item.status == OrderItemStatus.READY
          ? (isAllOrderItemInReadyStatus = true)
          : (isAllOrderItemInReadyStatus = false);
        return item;
      });

      if (isAllOrderItemInReadyStatus) order.status = OrderStatus.READY;

      order.orderItems = mapedOrderItems;

      await order.save();
      return await this.findOrderOfTheDay();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // This method return and update the order number
  async _getNextOrderSequence(orgId: string) {
    const orgDoc: Organisation = await this.organsationModel.findOneAndUpdate(
      { _id: orgId },
      { $inc: { orderCounter: 1 } },
      { new: true }
    );

    return orgDoc.orderCounter;
  }
}

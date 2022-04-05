import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './models/order.schema';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name)
    private readonly order: Model<Order>
  ) {}

  getOrders() {
    // return this.product.create({ name: 'hello' });
    // this.product.aggregate().project({array: [{
    //   k:"category",
    //   v
    // }]})
    return this.order.find().sort('category').exec();
  }

  createOrder(order: any) {
    const newProduct = new this.order(order);
    return newProduct.save();
  }

  async findOrderOfTheDay() {
    // return await this.order.find();
    let date = new Date(new Date().setUTCHours(0, 0, 0, 0));

    try {
      return await this.order.aggregate([
        {
          $match: {
            createdAt: {
              $gt: date,
            },
          },
        },
      ]);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}

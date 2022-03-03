import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  createOrder(orderDto: CreateOrderDto) {
    let { user, cartItems } = orderDto;
    let total = Object.values(cartItems).reduce((tot, cartItem) => {
      return (
        tot +
        (cartItem.product.price +
          cartItem.modifiers!.reduce(
            (prev, curr) => prev + parseInt(curr?.price.toString()),
            0
          )) *
          cartItem.count
      );
    }, 0);

    let newOrder = {
      user,
      cartItems: Object.values(cartItems),
      status: 'PLACED',
      total,
    };

    this.orderRepository.createOrder(newOrder);
    console.log(newOrder);
  }
}

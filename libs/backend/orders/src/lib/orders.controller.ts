import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './orders.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrdersForTheUser() {
    return 'hello world';
  }

  @Post()
  createOrder(@Body() order: CreateOrderDto) {
    this.orderService.createOrder(order);
    console.log(order);
  }
}

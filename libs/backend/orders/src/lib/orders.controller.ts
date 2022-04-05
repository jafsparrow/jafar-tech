import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './orders.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrdersForTheUser() {
    return this.orderService.findOrdersOfTheday();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createOrder(@Body() order: CreateOrderDto, @Req() req) {
    let user = req.user;
    this.orderService.createOrder(order, user);
    console.log(order);
  }
}

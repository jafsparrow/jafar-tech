import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderItemStatusDto } from './dto/update-order-item-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
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

  @Post('table-order')
  createOrderByTableUser(@Body('password') password: string) {
    // user password to identify the table.
    // make the user as corresponding table-user, and make order pending..
    // admin or staff should have an option to accept this order.
    console.log(password);
    return password;
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateOrderStatus(
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
    @Req() req
  ) {
    let user = req.user;
    return this.orderService.updateOrderStatus(user, updateOrderStatusDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  updateOrderItemStatus(
    @Body() updateOrderItemDto: UpdateOrderItemStatusDto,
    @Req() req
  ) {
    let user = req.user;
    return this.orderService.updateOrderItemStatus(user, updateOrderItemDto);
  }
}

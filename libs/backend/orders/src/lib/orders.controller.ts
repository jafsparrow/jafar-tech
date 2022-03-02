import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrderController {
  @Get()
  getOrdersForTheUser() {
    return 'hello world';
  }
}

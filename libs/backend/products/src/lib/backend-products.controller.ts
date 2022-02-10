import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class BackendProductsController {
  @Get('list')
  getProducts() {
    return 'product works';
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class BackendProductsController {
  @Get()
  getProducts() {
    return 'product works';
  }
}

import { Controller, Get } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class BackendProductsController {
  constructor(private productService: ProductService) {}
  @Get('list')
  getProducts() {
    return this.productService.getProduct();
  }
}

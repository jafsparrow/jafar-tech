import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateProductDto } from './dto/create-product-dto';
import { ProductService } from './products.service';

@Controller('products')
export class BackendProductsController {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  @Get('list')
  getProducts() {
    return this.productService.getProduct();
  }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    console.log('create product called');
    return this.productService.createProduct(product);
  }

  @Post('category')
  createCategory(@Body() category: CreateCategoryDto) {
    this.categoryService.createCategory(category);
  }
}

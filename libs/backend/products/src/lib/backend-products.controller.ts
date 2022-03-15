import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateProductDto } from './dto/create-product-dto';
import { PatchProductIndexDto } from './dto/patch-porduct.dto';
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

  @Post(':id')
  createProduct(
    @Param('id') companyId: string,
    @Body() product: CreateProductDto
  ) {
    console.log('create product called');
    return this.productService.createProduct(companyId, product);
  }

  @Post('category')
  createCategory(@Body() category: CreateCategoryDto) {
    this.categoryService.createCategory(category);
  }

  @Patch(':id')
  updateProductOrder(
    @Body() data: PatchProductIndexDto[],
    @Param('id') companyId: string
  ) {
    console.log(data);
    return this.productService.updateProductsIndex(companyId, data);
  }
}

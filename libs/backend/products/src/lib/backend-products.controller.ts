import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateCategoryDto } from '../../../category/src/lib/dto/create-category.dto';
import { CreateProductDto } from './dto/create-product-dto';
import { PatchProductIndexDto } from './dto/patch-porduct.dto';
import { ProductBoolFieldDto } from './dto/product-bool-field-update.dto';
import { ProductService } from './products.service';

@Controller('products')
export class BackendProductsController {
  constructor(private productService: ProductService) {}
  @Get('list')
  getProducts() {
    return this.productService.getProduct();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createProduct(@Body() product: CreateProductDto, @Req() req) {
    console.log('create product called');
    let companyId = req.user.companyId;
    return this.productService.createProduct(companyId, product);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateProduct(
    @Body() product: CreateProductDto,
    @Req() req,
    @Param('id') productId: string
  ) {
    let companyId = req.user.companyId;
    console.log('controller', { companyId, productId });
    return this.productService.updateProduct(companyId, productId, product);
  }

  @Patch()
  updateProductOrder(@Body() data: PatchProductIndexDto[], @Req() req) {
    // console.log(data);
    let companyId = req.user.companyId;
    return this.productService.updateProductsIndex(companyId, data);
  }

  @Put(':id')
  updateProductInfo(
    @Body() data: ProductBoolFieldDto,

    @Req() req,
    @Param('id') productId: string
  ) {
    let companyId = req.user.companyId;
    return this.productService.updateProductInfo(productId, companyId, data);
  }
}

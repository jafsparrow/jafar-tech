import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendProductsController } from './backend-products.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { Category, CategorySchema } from './models/category.schema';
import { ProductSchema, Product } from './models/product.schema';
import { ProductsRepository } from './products.repository';
import { ProductService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [BackendProductsController],
  providers: [
    ProductsRepository,
    ProductService,
    CategoryService,
    CategoryRepository,
  ],
  exports: [],
})
export class BackendProductsModule {}

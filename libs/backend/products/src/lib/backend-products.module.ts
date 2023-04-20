import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendProductsController } from './backend-products.controller';
import { ProductSchema, Product } from './models/product.schema';
import { ProductsRepository } from './products.repository';
import { ProductService } from './products.service';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';

import { MulterModule } from '@nestjs/platform-express';
import { ProductImageService } from './product-image.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
    MulterModule.register({
      dest: './files',
    }),
    BackendOrganisationModule,
  ],
  controllers: [BackendProductsController],
  providers: [ProductsRepository, ProductService, ProductImageService],
  exports: [],
})
export class BackendProductsModule {}

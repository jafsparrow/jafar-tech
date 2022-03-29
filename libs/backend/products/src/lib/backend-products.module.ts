import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendProductsController } from './backend-products.controller';
import { ProductSchema, Product } from './models/product.schema';
import { ProductsRepository } from './products.repository';
import { ProductService } from './products.service';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
    BackendOrganisationModule,
  ],
  controllers: [BackendProductsController],
  providers: [ProductsRepository, ProductService],
  exports: [],
})
export class BackendProductsModule {}

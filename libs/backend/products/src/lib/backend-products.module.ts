import { Module } from '@nestjs/common';
import { BackendProductsController } from './backend-products.controller';
import { ProductService } from './products.service';

@Module({
  controllers: [BackendProductsController],
  providers: [ProductService],
  exports: [],
})
export class BackendProductsModule {}

/**
 * 
 * categories object
 * array of 2 items
 * 0: object
 *    name:
 *    description:
 *    openTime;
 *    closedTime:
 *    openAllDay
 *    archived:
 * 
 *     products: Array of Products.
 *        id:
 *        image:
 *        description:
 *        isAvailable:
 *        onSale:
 *        price:
 *        popular?:
 *        video?:
 *        printName:
 * 
 *        modilfierGroups
 *   
 * 1:
 * 
 * 
 * 
 * 
the shape of the categories end point ///
 * 
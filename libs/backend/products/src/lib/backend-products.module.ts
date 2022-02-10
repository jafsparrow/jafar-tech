import { Module } from '@nestjs/common';
import { BackendProductsController } from './backend-products.controller';

@Module({
  controllers: [BackendProductsController],
  providers: [],
  exports: [],
})
export class BackendProductsModule {}

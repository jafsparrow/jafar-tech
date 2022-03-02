import { Module } from '@nestjs/common';
import { OrderController } from './orders.controller';

@Module({
  controllers: [OrderController],
  providers: [],
  exports: [],
})
export class BackendOrdersModule {}

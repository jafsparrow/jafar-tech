import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './models/order.schema';
import { OrderController } from './orders.controller';
import { OrderRepository } from './orders.repository';
import { OrderService } from './orders.service';

@Module({
  controllers: [OrderController],
  exports: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
    BackendAuthModule,
  ],
  providers: [OrderService, OrderRepository],
})
export class BackendOrdersModule {}

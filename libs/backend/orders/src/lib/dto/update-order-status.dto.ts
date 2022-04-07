import { OrderStatus } from '@jafar-tech/shared/data-access';
import { IsNotEmpty } from 'class-validator';

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  orderId: string;

  @IsNotEmpty()
  status: OrderStatus;
}

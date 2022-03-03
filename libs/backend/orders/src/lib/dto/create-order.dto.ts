import { CartItem, User } from '@jafar-tech/shared/data-access';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsDefined()
  user: User;

  @IsDefined()
  @IsNotEmpty()
  cartItems: { [key: string]: CartItem };
}

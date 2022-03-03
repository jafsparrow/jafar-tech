import { CartItem } from '@jafar-tech/shared/data-access';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserSchema, User } from '@jafar-tech/backend/auth';

import { Document, ObjectId } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: UserSchema })
  user: User;

  @Prop({ required: true })
  cartItems: CartItem[];

  @Prop({ required: true })
  total: number;

  @Prop({
    enum: ['PLACED', 'INPROGRESS', 'SERVED', 'BILLED', 'PAID'],
    required: true,
  })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

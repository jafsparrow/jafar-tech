import {
  AppliedTax,
  CartItem,
  OrderItem,
  OrderStatus,
} from '@jafar-tech/shared/data-access';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserSchema, User } from '@jafar-tech/backend/auth';

import { Document, ObjectId } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: UserSchema })
  user: User;

  @Prop({ default: null })
  lastUpdatedBy: string;

  @Prop({ required: true })
  orderItems: OrderItem[];

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  taxedTotal: number;

  @Prop({ default: [] })
  taxesApplied: AppliedTax[];

  @Prop({
    enum: OrderStatus,
    required: true,
  })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

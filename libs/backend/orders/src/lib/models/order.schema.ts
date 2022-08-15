import {
  AppliedTax,
  CartItem,
  OrderItem,
  OrderStatus,
  User,
  UserType,
} from '@jafar-tech/shared/data-access';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, ObjectId } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {

  @Prop()
  orderNumber: number;
  
  @Prop({type: Map<string, User>})
  createdBy: User;

  @Prop({type: Map<string, User>})
  createdFor: User;

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

  @Prop({ default: '' })
  note: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

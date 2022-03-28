import { User, UserSchema } from '@jafar-tech/backend/auth';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Product,
  ProductSchema,
} from 'libs/backend/products/src/lib/models/product.schema';

import { Document } from 'mongoose';

@Schema()
export class Organisation extends Document {
  @Prop()
  name: string;

  @Prop({ default: '' })
  caption: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ default: '' })
  phone: string;

  @Prop()
  type: string[];

  @Prop({ default: '' })
  addressLine1: string;

  @Prop({ default: '' })
  addressLine2: string;

  @Prop({ default: '' })
  pin: string;

  @Prop({ default: '' })
  currencyCode: string;

  @Prop({ default: '' })
  country: string;

  @Prop({ default: [] })
  coord: string[];

  @Prop({ default: 'open' })
  license: string;

  @Prop({ default: true })
  openAllWeek: boolean;

  @Prop({ default: [] })
  offDays: string[];

  @Prop({ default: false })
  isRegistrationComplete: boolean;

  @Prop({ type: [ProductSchema], default: [] })
  products: Product[];

  @Prop({ type: [UserSchema], default: [] })
  users: User[];
}

export const OrganisationSchema = SchemaFactory.createForClass(Organisation);
// license: {
// 	type: partial | full,
// 	expiryDate:
// }
// accessRights: {
// 	canComment: true,
// 	surpriseMe: true,
// 	videoMenu: true
// 	tableOrder: true.
// 	staffOrder: true,
// 	onlineOrder: true,
// 	adminPanel: true,
// 	kitchenDisplay: true
//  }

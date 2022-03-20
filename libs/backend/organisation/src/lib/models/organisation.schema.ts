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
  @Prop()
  caption: string;

  // @Prop({ unique: true })
  // email: string;

  // @Prop()
  // password: string;

  @Prop()
  type: string[];
  @Prop()
  address: string;
  @Prop()
  coord: string[];

  @Prop()
  license: string;

  @Prop({ default: true })
  openAllWeek: boolean;

  @Prop()
  offDays: string[];

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

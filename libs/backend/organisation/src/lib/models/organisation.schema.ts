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

  @Prop({ type: [UserSchema], default: [] })
  users: User[];

  @Prop({ type: [ProductSchema], default: [] })
  produccts: Product[];
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

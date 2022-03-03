import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

import { Document, Types } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserType } from '@jafar-tech/shared/data-access';
import {
  Organisation,
  OrganisationSchema,
} from '@jafar-tech/backend/organisation';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ default: '' })
  phone: string;

  @Prop()
  password: string;

  @Prop({ default: '' })
  username: string;

  @Prop({ enum: UserType })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Organisation' })
  company: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

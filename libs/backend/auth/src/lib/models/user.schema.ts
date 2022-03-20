import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserType } from '@jafar-tech/shared/data-access';

@Schema({ autoCreate: false })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  username: string;

  @Prop({ enum: UserType })
  type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

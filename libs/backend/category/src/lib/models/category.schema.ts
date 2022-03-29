import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  archived: boolean;

  @Prop({ default: true })
  alwaysOpen: boolean;

  @Prop({ default: null })
  day?: string;

  @Prop({ default: null })
  openTime?: string;

  @Prop({ default: null })
  closeTime?: string;

  @Prop({ default: true })
  openAllDay?: string;

  @Prop({ default: null })
  hours?: string[];

  @Prop({ default: 999 })
  adminIndex: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TableSection extends Document {
  @Prop()
  name: string;
}

export const TableSectionSchema = SchemaFactory.createForClass(TableSection);

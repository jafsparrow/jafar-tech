import { Organisation } from '@jafar-tech/backend/organisation';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Table extends Document {
  @Prop()
  id: number;

  @Prop()
  isOccupied: boolean;

  @Prop()
  capacity: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' })
  organisation: Organisation;
}

export const TableSchema = SchemaFactory.createForClass(Table);

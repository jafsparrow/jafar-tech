import { Organisation } from '@jafar-tech/backend/organisation';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Table extends Document {
  @Prop()
  id: number;

  @Prop({ unique: true, minlength: 4 })
  password: number;

  @Prop({ default: false })
  isOccupied: boolean;

  @Prop()
  capacity: number;

  @Prop()
  section: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' })
  organisation: Organisation;
}

export const TableSchema = SchemaFactory.createForClass(Table);

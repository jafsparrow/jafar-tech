import { ModifierGroupsEntity } from '@jafar-tech/shared/data-access';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Category } from './category.schema';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: null })
  image: string;

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop({ default: true })
  onSale: boolean;

  @Prop({ required: true })
  price: number;

  @Prop({ default: false })
  archived: boolean;

  @Prop({ default: null })
  video?: string;

  @Prop({ default: false })
  popular: boolean;

  @Prop()
  printName?: string;
  // modifierGroups?: ModifierGroupsEntity[] | null;

  @Prop({ default: {} })
  modifierGroups?: [ModifierGroupsEntity];

  // @Prop({ type: SchemaTypes.ObjectId, ref: Category.name })
  // category: Category;

  @Prop()
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

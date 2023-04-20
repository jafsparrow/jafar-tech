import {
  ModifierGroupsEntity,
  ProductImage,
} from '@jafar-tech/shared/data-access';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: [], maxlength: 3 })
  image: ProductImage[];

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop({ default: true })
  onSale: boolean;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  cost: number;

  @Prop({ default: false })
  archived: boolean;

  @Prop({ default: null })
  video?: string;

  @Prop({ default: false })
  popular: boolean;

  @Prop()
  printName?: string;

  @Prop({ default: 999 })
  code: number;

  @Prop({ default: {} })
  modifierGroups?: [ModifierGroupsEntity];

  // @Prop({ type: SchemaTypes.ObjectId, ref: Category.name })
  // category: Category;

  @Prop()
  category: string;

  @Prop({ default: 99 })
  indexInCategory: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

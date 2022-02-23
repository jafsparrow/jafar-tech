import { IsNotEmpty, IsOptional, isString, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  isAvailable: boolean;

  @IsOptional()
  onSale: boolean;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  archived: boolean;

  @IsOptional()
  video?: string;

  @IsOptional()
  popular: boolean;

  @IsString()
  @IsOptional()
  printName?: string;

  modifierGroups: Modifiers[];
}

export class Modifiers {
  description?: string;
  printName?: string;
  printModifiersAsItems?: boolean;
  modifiers?: Modifier[];
}

export interface Modifier {
  description: string;
  price: number;
  id?: number;
}

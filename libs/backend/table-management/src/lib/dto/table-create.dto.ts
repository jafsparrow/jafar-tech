import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsOptional,
} from 'class-validator';

export class TableCreateDto {
  // @IsNotEmpty()
  // companyId: string;

  @IsNotEmpty()
  @IsNumber()
  tableNumber: number;

  @IsNotEmpty()
  password: number;

  @IsNotEmpty()
  capacity: number;

  @IsOptional()
  section: string;
}

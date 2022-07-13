import { IsBoolean, IsNotEmpty, IsNumber, isNumber } from 'class-validator';

export class TableCreateDto {
  @IsNotEmpty()
  companyId: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsBoolean()
  isOccupied: boolean;

  @IsNotEmpty()
  capacity: number;
}

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsBoolean()
  archived: string;

  @IsBoolean()
  @IsOptional()
  alwaysOpen: boolean;

  @IsString()
  @IsOptional()
  day?: string;

  @IsString()
  @IsOptional()
  openTime?: string;

  @IsString()
  @IsOptional()
  closeTime?: null;

  @IsBoolean()
  @IsOptional()
  openAllDay?: null;

  // hours?: null[] | null;
}

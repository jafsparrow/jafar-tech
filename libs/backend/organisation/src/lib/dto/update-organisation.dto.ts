import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UpdateOrganisationDto {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  caption: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsPhoneNumber()
  @IsString()
  phone: string;

  @IsArray()
  @IsOptional()
  type: string[];

  @IsString()
  @IsOptional()
  addressLine1: string;

  @IsString()
  @IsOptional()
  addressLine2: string;

  @IsString()
  @IsOptional()
  pin: string;

  @IsString()
  @IsOptional()
  currencyCode: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsOptional()
  coord: string[];

  @IsBoolean()
  @IsOptional()
  openAllWeek: boolean;

  @IsOptional()
  offDays: string[];

  @IsBoolean()
  isRegistrationComplete: boolean;
  @IsOptional()
  taxes: [];
}

import { IsNotEmpty, MinLength } from 'class-validator';

export class TablePasswordUpdateDto {
  //   @IsNotEmpty()
  //   companyId: string;

  @IsNotEmpty()
  id: number;

  @MinLength(4)
  password: number;
}

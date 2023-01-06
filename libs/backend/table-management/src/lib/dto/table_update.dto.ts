import { IsNotEmpty } from 'class-validator';

export class TableUpdateDto {
  @IsNotEmpty()
  _id: string;

  capacity: number;

  password: number;
}

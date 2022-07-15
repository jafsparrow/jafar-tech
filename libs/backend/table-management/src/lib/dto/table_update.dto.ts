import { IsNotEmpty } from 'class-validator';

export class TableUpdateDto {
  @IsNotEmpty()
  id: number;

  capacity: number;
}

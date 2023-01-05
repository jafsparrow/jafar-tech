import { IsNotEmpty } from 'class-validator';

export class TableSectionDto {
  @IsNotEmpty()
  name: string;
}

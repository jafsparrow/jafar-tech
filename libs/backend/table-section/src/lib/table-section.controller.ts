import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TableSectionDto } from './dto/table-section.dto';

@Controller('section')
export class TableSectionController {
  @Get()
  getTableSections() {
    return 'hello world';
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createTableSection(
    @Request() request,
    @Body() tableSectiondto: TableSectionDto
  ) {}

  editTableSection() {}
}

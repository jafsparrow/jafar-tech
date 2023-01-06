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
import { TableSectionService } from './table-section.service';

@Controller('section')
export class TableSectionController {
  constructor(private sectionService: TableSectionService) {}
  @Get()
  getTableSections() {
    return 'hello world';
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createTableSection(
    @Request() request,
    @Body() tableSectiondto: TableSectionDto
  ) {
    let companyId = request.user.companyId;
    return this.sectionService.addTableSection(companyId, tableSectiondto);
  }

  editTableSection() {}
}

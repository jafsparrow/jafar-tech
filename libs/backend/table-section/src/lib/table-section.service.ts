import { Injectable } from '@nestjs/common';
import { TableSectionDto } from './dto/table-section.dto';
import { TableSectionRepository } from './table-section.repository';

@Injectable()
export class TableSectionService {
  constructor(private tableSectionRepo: TableSectionRepository) {}

  addTableSection(companyId: string, data: TableSectionDto) {
    return this.tableSectionRepo.createTableSection(companyId, data);
  }
}

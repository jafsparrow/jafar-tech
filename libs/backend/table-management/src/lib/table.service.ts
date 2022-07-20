import { Injectable } from '@nestjs/common';
import { TableCreateDto } from './dto/table-create.dto';
import { TableUpdateDto } from './dto/table_update.dto';
import { TableManagementRepository } from './table.repository';

@Injectable()
export class TableManagementService {
  constructor(private tableRepository: TableManagementRepository) {}

  getTables(organisation: string) {
    return this.tableRepository.getTables(organisation);
  }

  createTable(organisation: string, tableInfo: TableCreateDto) {
    return this.tableRepository.createTable(organisation, tableInfo);
  }

  updateTable(
    organisation: string,
    tableId: number,
    tableInfo: TableUpdateDto
  ) {
    return this.tableRepository.updateTableInfo(
      organisation,
      tableId,
      tableInfo
    );
  }

  deleteTable(organisation: string, tableId: number) {
    return this.tableRepository.deleteTable(organisation, tableId);
  }
}

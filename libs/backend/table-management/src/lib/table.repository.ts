import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseError } from 'mongoose';
import { TableCreateDto } from './dto/table-create.dto';
import { TableUpdateDto } from './dto/table_update.dto';
import { Table } from './models/table.schema';

@Injectable()
export class TableManagementRepository {
  constructor(
    @InjectModel(Table.name)
    private readonly tableModel: Model<Table>
  ) {}

  async createTable(organisation: string, tableInfo: TableCreateDto) {
    const data = { ...tableInfo, organisation };
    try {
      await this.tableModel.create(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async updateTableInfo(
    organisation: string,
    tableId: number,
    tableInfo: TableUpdateDto
  ) {
    const data = { ...tableInfo };

    try {
      await this.tableModel.updateOne(
        { id: tableId, organisation: organisation },
        data
      );
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async deleteTable(organisation: string, tableId: number) {
    try {
      await this.tableModel.deleteOne({
        id: tableId,
        organisation: organisation,
      });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }
}

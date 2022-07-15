import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TableManagementController } from './backend-table-management.controller';
import { Table, TableSchema } from './models/table.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }]),
  ],
  controllers: [TableManagementController],
  providers: [],
  exports: [],
})
export class BackendTableManagementModule {}

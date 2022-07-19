import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TableManagementController } from './backend-table-management.controller';
import { Table, TableSchema } from './models/table.schema';
import { TableManagementRepository } from './table.repository';
import { TableManagementService } from './table.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }]),
    BackendAuthModule,
  ],
  controllers: [TableManagementController],
  providers: [TableManagementService, TableManagementRepository],
  exports: [],
})
export class BackendTableManagementModule {}

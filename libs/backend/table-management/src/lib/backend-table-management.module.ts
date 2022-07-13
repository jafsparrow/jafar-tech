import { Module } from '@nestjs/common';
import { TableManagementController } from './backend-table-management.controller';

@Module({
  controllers: [TableManagementController],
  providers: [],
  exports: [],
})
export class BackendTableManagementModule {}

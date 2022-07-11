import { Module } from '@nestjs/common';
import { TableManagementController } from './backend-table-manangement.controller';

@Module({
  controllers: [TableManagementController],
  providers: [],
  exports: [],
})
export class BackendTableManangementModule {}

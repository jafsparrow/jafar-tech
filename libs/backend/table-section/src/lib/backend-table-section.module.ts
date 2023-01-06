import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TableSection,
  TableSectionSchema,
} from './models/table-section.schema';
import { TableSectionController } from './table-section.controller';
import { TableSectionRepository } from './table-section.repository';
import { TableSectionService } from './table-section.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TableSection.name,
        schema: TableSectionSchema,
      },
    ]),
    forwardRef(() => BackendOrganisationModule),
    BackendAuthModule,
  ],
  controllers: [TableSectionController],
  providers: [TableSectionService, TableSectionRepository],
  exports: [],
})
export class BackendTableSectionModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Organisation, OrganisationSchema } from './models/organisation.schema';
import { OrganisationController } from './organisation.controller';
import { OrganisationRepository } from './organisation.repository';
import { OrganisationService } from './organisation.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Organisation.name,
        schema: OrganisationSchema,
      },
    ]),
  ],
  controllers: [OrganisationController],
  providers: [OrganisationService, OrganisationRepository],
  exports: [MongooseModule],
})
export class BackendOrganisationModule {}

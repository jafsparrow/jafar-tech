import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { Organisation } from './models/organisation.schema';

export class OrganisationRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly organsationModel: Model<Organisation>
  ) {}

  createOrganisation(data: CreateOrganisationDto) {
    let org = this.organsationModel.create(data);
    return org;
  }

  async getOrgnisationById(companyId: string) {
    let org: Organisation = await this.organsationModel
      .findById(companyId)
      .select('-users');
    return org;
  }
}

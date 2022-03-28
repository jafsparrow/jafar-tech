import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
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

  async updateOrganisation(orgData: UpdateOrganisationDto) {
    let companyId: string = orgData._id;
    delete orgData['_id'];
    let updateOrg = {};
    try {
      updateOrg = await this.organsationModel.findByIdAndUpdate(
        companyId,
        orgData
      );
    } catch (error) {
      throw new NotFoundException();
    }
  }
}

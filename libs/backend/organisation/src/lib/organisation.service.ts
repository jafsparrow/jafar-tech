import { Injectable } from '@nestjs/common';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
import { OrganisationRepository } from './organisation.repository';

@Injectable()
export class OrganisationService {
  constructor(private orgRepository: OrganisationRepository) {}
  createOrganisation(orgDto: CreateOrganisationDto) {
    return this.orgRepository.createOrganisation(orgDto);
  }

  getOrganisationDetails(companyId: string) {
    return this.orgRepository.getOrgnisationById(companyId);
  }

  updateOrganisation(orgData: UpdateOrganisationDto) {
    return this.orgRepository.updateOrganisation(orgData);
  }
}

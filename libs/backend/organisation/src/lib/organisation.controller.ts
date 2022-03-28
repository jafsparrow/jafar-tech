import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
import { OrganisationService } from './organisation.service';

@Controller('organisation')
export class OrganisationController {
  constructor(private orgService: OrganisationService) {}

  @Post()
  createOrganisation(@Body() orgDto: CreateOrganisationDto) {
    return this.orgService.createOrganisation(orgDto);
  }

  @Get(':id')
  findOrganisation(@Param('id') companyId: string) {
    return this.orgService.getOrganisationDetails(companyId);
  }

  @Put()
  updateOrganisation(@Body() updateOrgData: UpdateOrganisationDto) {
    return this.orgService.updateOrganisation(updateOrgData);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
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
}

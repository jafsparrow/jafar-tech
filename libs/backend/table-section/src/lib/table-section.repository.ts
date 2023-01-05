import { Organisation } from '@jafar-tech/backend/organisation';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TableSectionDto } from './dto/table-section.dto';
import { TableSection } from './models/table-section.schema';

@Injectable()
export class TableSectionRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly orgModel: Model<Organisation>,
    @InjectModel(TableSection.name)
    private readonly tableSection: Model<TableSection>
  ) {}

  async createTableSection(
    companyId: string,
    tableSectionDto: TableSectionDto
  ) {
    const newTableSection = new this.tableSection(tableSectionDto);

    let organisation = await this.orgModel.findById(companyId);
    organisation.tableSections.push(newTableSection);
    let savedData = null;
    try {
      savedData = await organisation.save();
      return savedData;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}

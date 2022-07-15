import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { TableCreateDto } from './dto/table-create.dto';

@Controller('tablemanagement')
export class TableManagementController {
  @Get()
  getTableDetails() {
    return 'table works';
  }

  @Post()
  createTable(@Body() tableInfo: TableCreateDto, @Req() req) {
    //  companyId should be taken from the loggedUser auth information

    return tableInfo;
  }

  @Put()
  updateTable() {
    //  companyId should be taken from the loggedUser auth information
  }

  @Patch()
  updateTablePassword() {
    //  companyId should be taken from the loggedUser auth information
  }

  @Delete()
  DeleteTable() {
    //  companyId should be taken from the loggedUser auth information
  }
}

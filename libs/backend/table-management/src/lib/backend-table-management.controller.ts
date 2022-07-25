import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import { User } from '@jafar-tech/shared/data-access';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TableCreateDto } from './dto/table-create.dto';
import { TableManagementService } from './table.service';

@Controller('tablemanagement')
export class TableManagementController {
  constructor(private tableManagementService: TableManagementService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getTableDetails(@Req() req) {
    const companyId = (req.user as User).companyId;
    return this.tableManagementService.getTables(companyId);
    return 'table works';
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createTable(@Body() tableInfo: TableCreateDto, @Req() req) {
    //  companyId should be taken from the loggedUser auth information

    let user: User = req.user;
    return this.tableManagementService.createTable(user.companyId, tableInfo);
  }

  @Put()
  updateTable() {
    //  companyId should be taken from the loggedUser auth information
  }

  @Patch()
  updateTablePassword() {
    //  companyId should be taken from the loggedUser auth information
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':/id')
  DeleteTable(@Param('id') id: number, @Req() req) {
    let orgId: string = (req.user as User).companyId;
    return this.tableManagementService.deleteTable(orgId, id);
    //  companyId should be taken from the loggedUser auth information
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('tablemanagement')
export class TableManagementController {
  @Get()
  getTableDetais() {
    return 'table works';
  }
}

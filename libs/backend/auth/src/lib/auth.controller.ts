import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthenticationService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private authService: AuthenticationService
  ) {}
  @Get()
  getUser() {
    return `hello fucker ${this.config.get<string>('environment')}`;
  }

  createUser() {}

  @Post('tablelogin/:companyId')
  tableUserLogin(
    @Body() loginInfo: LoginDto,
    @Param('companyId') companyID: string
  ) {
    return this.authService.validateUser(loginInfo, companyID);
  }
  login() {}
  updateUser() {}
  deactivateUser() {}
}

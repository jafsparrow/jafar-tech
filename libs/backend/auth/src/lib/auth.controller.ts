import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthenticationService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private authService: AuthenticationService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('create')
  createUser(@Body() createUserdto: CreateUserDto) {
    let companyId = '6226fba3209ec7f5ebd956e7';
    return this.authService.createStaffUser(companyId, createUserdto);
  }

  @Post('tablelogin/:companyId')
  tableUserLogin(
    @Body() loginInfo: LoginDto,
    @Param('companyId') companyID: string
  ) {
    // return this.authService.validateUser(loginInfo, companyID);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  updateUser() {}
  deactivateUser() {}
}

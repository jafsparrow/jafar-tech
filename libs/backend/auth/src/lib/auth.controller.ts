import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
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

  @Post('signup')
  async signUp(@Body() createUserInput: CreateUserDto) {
    console.log('sinup methiod');
    return this.authService.signup(createUserInput);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  @Post('create')
  createUser(@Body() createUserdto: CreateUserDto, @Req() req) {
    // const companyId = req.user?.companyId;
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

  updateUser() {}
  deactivateUser() {}
}

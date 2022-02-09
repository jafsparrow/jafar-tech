import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(private config: ConfigService) {}
  @Get()
  getUser() {
    return `hello fucker ${this.config.get<string>('environment')}`;
  }
}

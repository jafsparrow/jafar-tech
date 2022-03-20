import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { AuthenticationRepository } from './auth.repository';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private authRepository: AuthenticationRepository,
    private jwtService: JwtService
  ) {}

  // async validateUser(loginData: LoginDto, companyId: string) {
  //   let users = await this.authRepository.findCompanyUser(
  //     companyId,
  //     loginData.username
  //   );

  //   if (users) {
  //     return users[0].password == loginData.password;
  //   }
  // }

  async validateUser(username: string, password: string) {
    console.log(username, password);

    let user = { username, password, userId: '11111' };

    if (user) {
      return user;
    }

    new UnauthorizedException('You are not allowed to fuck with me.');
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

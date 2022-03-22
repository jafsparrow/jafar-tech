import { UserType } from '@jafar-tech/shared/data-access';
import {
  ConflictException,
  ImATeapotException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationRepository } from './auth.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { Mongoose } from 'mongoose';

@Injectable()
export class AuthenticationService {
  constructor(
    private authRepository: AuthenticationRepository,
    private jwtService: JwtService
  ) {}

  async createStaffUser(companyId: string, data: CreateUserDto) {
    let hashedPassword = await bcrypt.hash(data.password, 10);

    return this.authRepository.createUser(companyId, UserType.STAFF, {
      ...data,
      password: hashedPassword,
    });
  }

  async createAdminUser(companyId: string, data: CreateUserDto) {
    return this.authRepository.createUser(companyId, UserType.ADMIN, data);
  }

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

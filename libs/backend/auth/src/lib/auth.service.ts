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
import { User } from './models/user.schema';

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

  async signup(userInput: CreateUserDto) {
    let signedUpUser = await this.authRepository.signUpNewUser(userInput);
    return this.login(signedUpUser);
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

  async validateUser(email: string, password: string) {
    let user = await this.authRepository.getUserInfo(email);

    if (!(await this.validatePassword(password, user.password))) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validatePassword(
    givenPassword: string,
    encPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(givenPassword, encPassword);
  }

  async login(user: User) {
    const payload = {
      email: user.email,
      role: user.type,
      companyId: user.company,
    };
    return {
      user: {
        companyId: user.company,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userType: user.type,
      },
      token: this.jwtService.sign(payload),
    };
  }
}

import { Injectable } from '@nestjs/common';
import { AuthenticationRepository } from './auth.repository';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthenticationService {
  constructor(private authRepository: AuthenticationRepository) {}

  async validateUser(loginData: LoginDto, companyId: string) {
    let users = await this.authRepository.findCompanyUser(
      companyId,
      loginData.username
    );

    if (users) {
      return users[0].password == loginData.password;
    }
  }
}

import { BackendCoreModule } from '@jafar-tech/backend/core';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthenticationRepository } from './auth.repository';
import { AuthenticationService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { User, UserSchema } from './models/user.schema';

@Module({
  imports: [
    BackendCoreModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    BackendOrganisationModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthenticationRepository,
    AuthenticationService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [MongooseModule, JwtStrategy],
})
export class BackendAuthModule {}

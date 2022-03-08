import { BackendCoreModule } from '@jafar-tech/backend/core';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthenticationRepository } from './auth.repository';
import { AuthenticationService } from './auth.service';
import { User, UserSchema } from './models/user.schema';

@Module({
  imports: [
    BackendCoreModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    BackendOrganisationModule,
  ],
  controllers: [AuthController],
  providers: [AuthenticationRepository, AuthenticationService],
  exports: [MongooseModule],
})
export class BackendAuthModule {}

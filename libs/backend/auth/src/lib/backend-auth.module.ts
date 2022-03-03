import { BackendCoreModule } from '@jafar-tech/backend/core';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
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
  ],
  controllers: [AuthController],
  providers: [],
  exports: [MongooseModule],
})
export class BackendAuthModule {}

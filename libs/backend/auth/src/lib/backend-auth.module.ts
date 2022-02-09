import { BackendCoreModule } from '@jafar-tech/backend/core';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  imports: [BackendCoreModule],
  controllers: [AuthController],
  providers: [],
  exports: [],
})
export class BackendAuthModule {}

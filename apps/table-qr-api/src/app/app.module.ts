import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { BackendCoreModule } from '@jafar-tech/backend/core';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendCoreModule, BackendAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

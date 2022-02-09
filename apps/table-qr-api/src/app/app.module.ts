import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

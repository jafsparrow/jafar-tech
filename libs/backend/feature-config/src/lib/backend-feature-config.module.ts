import { appConfiguration, mongoConfiguration } from '@jafar-tech/backend/utils-config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration, mongoConfiguration],
    }),
  ],
})
export class BackendFeatureConfigModule {}

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  AppConfiguration,
  appConfiguration,
} from '@jafar-tech/backend/utils-config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 3333;

  // const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  // app.useGlobalPipes(new ValidationPipe());
  // await app.listen(appConfig.port);
  // Logger.log(
  //   `🚀 Application is running on: ${appConfig.domain}/${globalPrefix}`
  // );

  await app.listen(port);
  // console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

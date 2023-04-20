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

import * as admin from 'firebase-admin';
var serviceAccount = require('./tableqr-16f6c-firebase-adminsdk-z42v7-d8ffdbcc55.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 3333;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://tableqr-16f6c.appspot.com',
  });

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

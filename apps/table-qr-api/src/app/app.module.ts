import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { BackendCoreModule } from '@jafar-tech/backend/core';
import { BackendOrdersModule } from '@jafar-tech/backend/orders';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';
import { BackendProductsModule } from '@jafar-tech/backend/products';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     uri: configService.get<string>('MONGO_ATLAS');
    //   },
    //   inject: [ConfigService],
    // }),
    MongooseModule.forRoot(
      'mongodb+srv://tableqr:Temp1234@cluster0.y7xyc.mongodb.net/tableqr?retryWrites=true&w=majority',
      { appName: 'appnameprintedonlog', dbName: 'tableqr' }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'table-qr'),
      exclude: ['/api*'],
    }),
    BackendCoreModule,
    BackendAuthModule,
    BackendProductsModule,
    BackendOrdersModule,
    BackendOrganisationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

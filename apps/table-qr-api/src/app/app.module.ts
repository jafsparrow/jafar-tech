import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { BackendCategoryModule } from '@jafar-tech/backend/category';
import { BackendCoreModule } from '@jafar-tech/backend/core';
import { BackendFeatureConfigModule } from '@jafar-tech/backend/feature-config';
import { BackendFeatureTodoModule } from '@jafar-tech/backend/feature-todo';
import { BackendOrdersModule } from '@jafar-tech/backend/orders';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';
import { BackendProductsModule } from '@jafar-tech/backend/products';
import { BackendTableManagementModule } from '@jafar-tech/backend/table-management';
import {
  MongoConfiguration,
  mongoConfiguration,
} from '@jafar-tech/backend/utils-config';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BackendFeatureConfigModule,
    // BackendFeatureTodoModule,
    MongooseModule.forRootAsync({
      inject: [mongoConfiguration.KEY],
      useFactory: (config: MongoConfiguration) => {
        console.log('configuration is ', config);
        return {
          uri: config.uri,
          dbName: config.dbName,
        };
      },
    }),
    // [TODO] - the mongo atals url has some extra querystring parameters, which has not been incorporated.
    // in the above forRootAsync method for mongoosemodule. this is needs further research
    // MongooseModule.forRoot(
    //   'mongodb+srv://tableqr:Temp1234@cluster0.y7xyc.mongodb.net/tableqr?retryWrites=true&w=majority',
    //   { appName: 'appnameprintedonlog', dbName: 'tableqr' }
    // ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'table-admin'),
      exclude: ['/api*'],
    }),
    BackendCoreModule,

    BackendOrganisationModule,
    BackendAuthModule,
    BackendProductsModule,
    BackendCategoryModule,
    BackendOrdersModule,
    BackendTableManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

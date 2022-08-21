import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const mongoConfiguration = registerAs('mongo', () => ({
  uri:
    process.env.MONGO_URI ||
    'mongodb+srv://tableqr:Temp1234@cluster0.y7xyc.mongodb.net',
  dbName: process.env.MONGO_DB_NAME || 'tableqr',
}));

export type MongoConfiguration = ConfigType<typeof mongoConfiguration>;
export const InjectMongoConfig = () => Inject(mongoConfiguration.KEY);

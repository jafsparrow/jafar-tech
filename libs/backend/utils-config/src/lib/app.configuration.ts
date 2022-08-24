import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => {
  return {
    protocol: process.env.APP_PROTOCOL || 'https',
    host: process.env.APP_HOST || 'localhost',
    port: Number(process.env.APP_PORT) || 3333,
    get domain() {
      return `${this.protocol}://${this.host}:${this.port}`;
    },
  };
});

export type AppConfiguration = ConfigType<typeof appConfiguration>;
// todo - the below line some advanced from nx youtube. study it later
export const InjectAppConfig = () => Inject(appConfiguration.KEY);

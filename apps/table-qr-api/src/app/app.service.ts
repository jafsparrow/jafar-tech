import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getData(): { message: string } {
    console.log(
      'config service output',
      this.configService.get('DATABASE_URL')
    );

    console.log('dbname', this.configService.get('MONGO_DB_NAME'));

    console.log(process.env.NODE_ENV);
    return { message: 'Welcome to table-qr-api!' };
  }
}

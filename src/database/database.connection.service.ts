import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
const { DB_HOST, DB_PORT, DEV_DB, DB_PASSWORD, DATABASE_URL, DB_NAME, NODE_ENV } = process.env;

const env = NODE_ENV === 'development' ? DEV_DB : DATABASE_URL

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type:'postgres',
      url: env,
      synchronize: true,
      migrations: ['build/migrations/*.ts'],
      dropSchema: false,
      logging: false,
      entities: ['dist/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscriber',
      },
    };
  }
}

import { Injectable } from '@nestjs/common';
import * as dotenv from  'dotenv';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
dotenv.config()

const { DB_HOST, DB_PORT, DEV_DB, DB_PASSWORD, DATABASE_URL, DB_NAME, NODE_ENV } = process.env;

const env = NODE_ENV === 'development' ? DEV_DB : DATABASE_URL

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type:'postgres',
      url: env,
      synchronize: true,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
      dropSchema: false,
      logging: false,
      entities: ['dist/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscriber',
      },
      keepConnectionAlive: true,
    };
  }
}

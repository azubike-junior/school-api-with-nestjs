import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: DB_HOST,
      username: DB_USERNAME,
      database: DB_NAME,
      port: Number(DB_PORT),
      password: DB_PASSWORD,
      synchronize: true,
      migrations: ['build/migrations/*.ts'],
      dropSchema: false,
      logging: true,
      entities: ['dist/**/*{.ts,.js}'],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscriber',
      },
    };
  }
}

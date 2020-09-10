import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './database/database.connection.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/logging-interceptor';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useClass: DatabaseConnectionService
		}),
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gql',
			playground: true,
			context: ({ req }) => ({ headers: req.headers })
		}),
		UserModule
	],
	controllers: [
		AppController
	],
	providers: [
		AppService,
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor
		}
	]
})
export class AppModule {}

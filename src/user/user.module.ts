import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { Auth } from 'src/entity/Auth';
import { Account_type } from 'src/entity/Account_type';
import { UserResolver } from './user.resolver';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			User,
			Auth,
			Account_type
		])
	],
	providers: [
		UserService,
		UserResolver
	]
})
export class UserModule {}

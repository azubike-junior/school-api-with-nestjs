import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { LoginDTO, RegisterDTO, AuthDTO } from './user.dto';
import { Auth } from 'src/entity/Auth';
import { Account_type } from 'src/entity/Account_type';
import * as moment from 'moment';

@Injectable()
export class UserService {
	constructor (
		@InjectRepository(User) private userRepo: Repository<User>,
		@InjectRepository(Auth) private authRepo: Repository<Auth>,
		@InjectRepository(Account_type) private accountRepo: Repository<Account_type>
	) {}

	async showAll () {
		const users = await this.userRepo.find();
		return users.map((user) => user.toResponseObject(false));
	}

	async read (id: string) {
		const user = await this.userRepo.findOne({ where: { id } });
		return user.toResponseObject(false);
	}

	register = async (data: RegisterDTO, authPassword: AuthDTO) => {
		let { name, email, account_type, bio } = data;
		let { password } = authPassword;
		let user = await this.userRepo.findOne({ where: { email } });
		if (user) {
			throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
		}
		const today = moment().format();
		const newData = {
			name,
			email,
			account_type,
			bio,
			created_at: today
		};
		user = this.userRepo.create(newData);
		await this.userRepo.save(user);
		let user_id = this.userRepo.getId(user);
		const authData = {
			password,
			created_at: today,
			user_id
		};
		const authPass = this.authRepo.create(authData);
		await this.authRepo.save(authPass);
		return user.toResponseObject(true);
	};

	login = async (data: LoginDTO) => {
		const { email, password } = data;
		const foundEmail = await this.userRepo.findOne({ where: { email } });
		if (foundEmail) {
			const { id } = foundEmail;
			const user = await this.authRepo.findOne({
				where: { user_id: id }
			});
			if (user) {
				let isMatch = await user.comparePassword(password);
				if (isMatch) {
					return foundEmail.toResponseObject(true);
				}
				throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
			}
		}
		throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
	};

	updateUser = async (id: string, data: RegisterDTO) => {
		await this.userRepo.update({ id }, data);
		return await this.userRepo.findOne({ id });
	};
}

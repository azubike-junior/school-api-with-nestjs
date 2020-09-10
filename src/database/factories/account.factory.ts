// user.factory.ts
import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Account_type } from '../../entity/Account_type';

define(Account_type, (faker: typeof Faker) => {
	const names = [
		'student',
		'instructor'
	];

	const user = new Account_type();

	user.name = `${names[0]}`;
	return user;
});

import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Account_type } from '../../entity/Account_type';

export default class CreateAccount implements Seeder {
	public async run (factory: Factory, connection: Connection): Promise<any> {
		await factory(Account_type)().create();
	}
}

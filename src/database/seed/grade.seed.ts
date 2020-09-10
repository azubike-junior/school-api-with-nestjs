import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Grades } from '../../entity/Grade';

export default class CreateAccount implements Seeder {
	public async run (factory: Factory, connection: Connection): Promise<any> {
		await factory(Grades)().create();
	}
}

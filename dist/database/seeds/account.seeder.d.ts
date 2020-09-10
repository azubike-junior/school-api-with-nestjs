import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
export default class CreateAccountType implements Seeder {
    private accountRepo;
    run(factory: Factory, connection: Connection): Promise<any>;
}

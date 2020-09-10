import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('account_type')
export class Account_type {
	@PrimaryGeneratedColumn({ type: 'int' })
	id: number;

	@Column({ nullable: false })
	name: string;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './User';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ nullable: false, length: 100 })
  password: string;

  @Column({ nullable: true })
  created_at: string;

  @Column({ nullable: true })
  user_id: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  comparePassword = async (attempt: string) => {
    return await bcrypt.compare(attempt, this.password);
  };

  @OneToOne(type => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}

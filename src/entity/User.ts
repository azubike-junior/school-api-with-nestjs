import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
import { Student_course } from './Student_courses';
import { Account_type } from './Account_type';
import * as jwt from 'jsonwebtoken';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ name: 'name', nullable: false })
  @IsString()
  name: string;

  @Column('varchar', { unique: true, length: 200, nullable: false })
  @IsEmail()
  email: string;

  @Column({ name: 'bio', nullable: true })
  bio: string;

  @Column({ nullable: true })
  created_at: string;

  @OneToOne(type => Account_type)
  @JoinColumn({ name: 'account_type' })
  account: Account_type;

  @OneToMany(
    type => Student_course,
    student_courses => student_courses.user,
  )
  public student_courses: Student_course[];

  public get token() {
    const { id } = this;
    return jwt.sign(
      {
        id,
      },
      process.env.SECRET,
      { expiresIn: '7d' },
    );
  }

  public toResponseObject = (showToken: boolean = true) => {
    const { id, name, bio, created_at, email, token } = this;
    const responseObject = { id, name, bio, email, created_at, token };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  };
}

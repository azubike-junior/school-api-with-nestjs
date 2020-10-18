import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
import * as jwt from 'jsonwebtoken';
import { Student_course } from './Student_course';

export enum account {
  student,
  instructor,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' }) id: number;

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

  @Column({ type: 'enum', enum: account, default: account.student })
  accountType: account;

  @OneToMany(
    type => Student_course,
    student_course => student_course.user,
  )
  public student_courses: Array<Student_course>;

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
    const { id, name, bio, created_at, accountType, email, token } = this;
    const responseObject = {
      id,
      name,
      bio,
      email,
      accountType,
      created_at,
      token,
    };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  };
}

//adanma.orji@gmail.com eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MDIwODYzNjgsImV4cCI6MTYwMjY5MTE2OH0.2tyUTzWuMHLdjb9-eER5E2nM3w0UTD1-rrdBOsPh6fE

// ade@gmail.com eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MDIwODY1NzQsImV4cCI6MTYwMjY5MTM3NH0.BWumdmyE5qaFO-e4eay2PWvuipFyc_PHsi9ZESMPNqM

//azubike eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE2MDIwODY3MDQsImV4cCI6MTYwMjY5MTUwNH0.DgAdOEve-gc1Q1nn7nRaKBwAoCEHf6gN_Y9j_4EboYE

//junior.orji eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJpYXQiOjE2MDIwODY3ODIsImV4cCI6MTYwMjY5MTU4Mn0.5HY_GjHNNE9udCzGL8JiNOJAEDV1Jd2NGn1K6-62UuU

//sean eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJpYXQiOjE2MDIwODY4NTYsImV4cCI6MTYwMjY5MTY1Nn0.Wb5UcuFP8ic_SfBsPFA3qedKmooMeAKAzwhvhj5qK-o

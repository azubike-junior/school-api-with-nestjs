import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Grades } from './Grade';
import { Student_course } from './Student_course';
import { User } from './User';

@Entity()
export class Courses {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ nullable: false })
  public name: string;

  @Column({ type: 'date' })
  public date_created: Date;

  @OneToMany(
    type => Student_course,
    student_course => student_course.course,
  )
  student_courses: Student_course[];

  @OneToOne(type => User)
  @JoinColumn({ name: 'instructor' })
  public user: User;
}

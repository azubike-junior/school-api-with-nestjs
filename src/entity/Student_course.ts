import {
  PrimaryGeneratedColumn,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Courses } from './Courses';
import { Grades } from './Grade';
import { User } from './User';

@Entity()
export class Student_course {
  constructor(course: Courses, user: User, grade: Grades) {
    this.course = course;
    this.user = user;
    this.grade = grade;
  }

  @PrimaryGeneratedColumn({ type: 'int' }) id: number;

  @ManyToOne(
    () => Courses,
    courses => courses.student_courses,
  )
  @JoinColumn({ name: 'course_id' })
  course: Courses;

  @ManyToOne(
    () => User,
    user => user.student_courses,
  )
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Grades)
  @JoinColumn({ name: 'grade_id' })
  public grade: Grades;
}

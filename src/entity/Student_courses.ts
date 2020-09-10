import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Courses } from './Courses';
import { Grades } from './Grade';
import { User } from './User';

@Entity()
export class Student_course {
	@PrimaryGeneratedColumn('uuid') id: string;

	@ManyToOne((type) => User, (user) => user.student_courses)
	@JoinColumn({ name: 'student_id' })
	public user: User;

	@ManyToOne((type) => Courses, (course) => course.student_courses)
	@JoinColumn({ name: 'course_id' })
	public course: Courses;

	@ManyToOne(() => Grades)
	@JoinColumn({ name: 'grades' })
	public grade: Grades;
}

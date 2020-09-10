import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Student_course } from './Student_courses';
import { User } from './User';

@Entity()
export class Courses {
	@PrimaryGeneratedColumn('uuid') id: string;

	@Column({ nullable: false })
	public name: string;

	@Column({ type: 'date' })
	public date_created: Date;

	@OneToOne((type) => User)
	@JoinColumn({ name: 'instructor' })
	public user: User;

	@OneToMany((type) => Student_course, (student_courses) => student_courses.course)
	public student_courses: Student_course[];
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Student_course } from './Student_courses';

@Entity()
export class Grades {
	@PrimaryGeneratedColumn({ type: 'int' })
	id: number;

	@Column({ type: 'int' })
	score: number;

	@Column({ nullable: false })
	description: string;

	@OneToMany(() => Student_course, (student_grade) => student_grade.grade)
	grade: Student_course;
}

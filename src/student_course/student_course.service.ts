import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student_course } from 'src/entity/Student_courses';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { Courses } from 'src/entity/Courses';

@Injectable()
export class StudentCourseService {
	constructor (
		@InjectRepository(Student_course) private studentRepo: Repository<Student_course>,
		@InjectRepository(User) private userRepo: Repository<User>,
		@InjectRepository(Courses) private courseRepo: Repository<Courses>
	) {}

	async register () {}
}

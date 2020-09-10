import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/entity/Courses';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';

@Injectable()
export class CourseService {
	constructor (@InjectRepository(Courses) private courseRepo: Repository<Courses>, @InjectRepository(User) private userRepo: Repository<User>) {}

	async showAll () {
		return await this.courseRepo.find();
	}

	async ReadByName (name: string) {
		return await this.courseRepo.findOne({ where: { name } });
	}

	async ReadByInstructor (instructor: string) {
		return await this.courseRepo.find({ where: { instructor } });
	}

	async create (courseData: {}) {
		return this.courseRepo.create(courseData);
	}
}

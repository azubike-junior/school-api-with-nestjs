import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/entity/Courses';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { CourseDto } from './course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Courses) private courseRepo: Repository<Courses>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  // only instructor can create course
  async create(data: CourseDto, user: any) {
    let { id } = user;
    let { name } = data;

    const oneCourse = await this.courseRepo.findOne({ where: { name } });
    const oneUser = await this.userRepo.findOne({ where: { id } });
    if (oneUser.accountType === 1) {
      if (!oneCourse) {
        const users = new User();
        users.id = id;
        await this.userRepo.save(users);

        let course = new Courses();
        course.name = name;
        course.date_created = new Date();
        course.user = users;
        await this.courseRepo.save(course);

        return {
          id: course.id,
          name: course.name,
          date_created: course.date_created,
          instructor: oneUser.name,
        };
      }
      throw new HttpException(
        `this course already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
    throw new HttpException(`Unauthorized access`, HttpStatus.BAD_REQUEST);
  }

  // instructor or student can get one course
  async showOne(id: string) {
    const course = await this.courseRepo.findOne({
      where: { id },
      relations: ['user'],
    });
    if (course.id !== id) {
      throw new HttpException(
        `No course with this ID ${id} is found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: course.id,
      name: course.name,
      date_created: course.date_created,
      instructor: course.user.name,
    };
  }

  //instructor or student can get all courses
  async showAll() {
    const courses = await this.courseRepo.find({ relations: ['user'] });
    courses.forEach(course => {
      return {
        id: course.id,
        name: course.name,
        date_created: course.date_created,
        instructor: course.user.name,
      };
    });
    return courses;
  }

  // instructor or student can get a course by name
  async ReadByName(name: string) {
    const course = await this.courseRepo.findOne({
      where: { name },
      relations: ['user'],
    });
    return {
      id: course.id,
      name: course.name,
      date_created: course.date_created,
      instructor: course.user.name,
    };
  }

  // only instructor can delete a course by id
  async deleteCourse(course_id: string, user: any) {
    const { id } = user;
    const foundUser = await this.userRepo.findOne({ where: { id } });
    if (foundUser.accountType === 1) {
      const course = await this.courseRepo.findOne({
        where: { id: course_id },
      });
      if (course) {
        await this.courseRepo.delete({ id: course_id });
        return {
          message: `course with this ID ${course_id} has been deleted`,
        };
      }
      throw new HttpException(
        `No course with this ID ${course_id} is found`,
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException(
      `user is not an instructor`,
      HttpStatus.UNAUTHORIZED,
    );
  }
}

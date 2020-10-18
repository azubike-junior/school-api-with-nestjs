import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { Courses } from 'src/entity/Courses';
import { StudentDto } from './student_dto';
import { Student_course } from 'src/entity/Student_course';
import { Grades } from 'src/entity/Grade';
import { student_courses } from './student.gpl';

@Injectable()
export class StudentCourseService {
  constructor(
    @InjectRepository(Student_course)
    private studentCourseRepo: Repository<Student_course>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Courses) private courseRepo: Repository<Courses>,
  ) {}

  // student can register for a course
  async registerCourse(data: StudentDto, user: any) {
    const { id } = user;
    let { course_id, name } = data;
    const foundUser = await this.userRepo.findOne({
      where: { id },
      relations: ['student_courses'],
    });
    const foundCourse = await this.courseRepo.findOne({
      where: { name, id: course_id },
      relations: ['student_courses'],
    });
    const newStudent = await this.studentCourseRepo.findOne({
      where: { user: foundUser, course: foundCourse },
      relations: ['course', 'user', 'grade'],
    });
    if (foundUser && foundUser.accountType === 0) {
      if (foundCourse) {
        const grade = new Grades();
        grade.description = null;
        grade.score = null;
        const studentCourse = new Student_course(foundCourse, foundUser, null);
        await this.studentCourseRepo.save(studentCourse);
        const studentCourses = await this.studentCourseRepo.find({
          where: { user: foundUser },
          relations: ['user', 'course'],
        });
        const oneUser = studentCourses.map(
          studentCourse => studentCourse.course,
        );
        return {
          name: foundUser.name,
          id: foundUser.id,
          bio: foundUser.bio,
          student_courses: oneUser,
          grade: {
            score: newStudent.grade.score,
            description: newStudent.grade.description,
          },
        };
      }
      throw new HttpException(
        'course doesnt exist in this dept',
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException('user is not a student', HttpStatus.BAD_REQUEST);
  }

  // instructor can get students offering a course
  async students(data: StudentDto, user: any) {
    const { name } = data;
    const { id } = user;
    const foundCourse = await this.courseRepo.findOne({
      where: { name },
      relations: ['user'],
    });
    const student = await this.studentCourseRepo.find({
      where: { course: foundCourse },
      relations: ['user', 'course'],
    });

    const instructor = await this.userRepo.findOne({ where: { id } });
    if (instructor && instructor.accountType === 1) {
      if (foundCourse) {
        const users = student.map(user => user.user);
        const courses = student.map(course => course);
        const grade = student.map(grades => grades);
        return {
          name: foundCourse.name,
          id: foundCourse.id,
          instructor: foundCourse.user.name,
          student_course: courses,
          grade,
        };
      }
      throw new HttpException(
        'course doesnt exist in this dept',
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException(
      'only instructor can see students',
      HttpStatus.UNAUTHORIZED,
    );
  }

  //student can get all course registered for
  async getCourses(user: any) {
    const { id } = user;
    const foundUser = await this.userRepo.findOne({ where: { id } });
    if (foundUser) {
      const userCourses = await this.studentCourseRepo.find({
        where: { user: foundUser },
        relations: ['course'],
      });
      const allCourses = userCourses.map(oneCourse => oneCourse.course);
      return {
        student_courses: allCourses,
      };
    }
    throw new HttpException('user is not a student', HttpStatus.NOT_FOUND);
  }
}

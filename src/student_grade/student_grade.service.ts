import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grades } from 'src/entity/Grade';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { GradeDto } from './student_grade.dto';
import { UserDTO } from '../user/user.dto';
import { Courses } from 'src/entity/Courses';
import { CourseDto } from 'src/course/course.dto';
import { Student_course } from 'src/entity/Student_course';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grades) private gradeRepo: Repository<Grades>,
    @InjectRepository(Student_course)
    private studentCourseRepo: Repository<Student_course>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Courses) private courseRepo: Repository<Courses>,
  ) {}

  // instructor can give grades to student
  async courseGrade(
    data2: UserDTO,
    courseDto: CourseDto,
    user: any,
    gradeDto: GradeDto,
  ) {
    const { id } = user;
    const { student_id } = data2;
    const { name, course_id } = courseDto;
    const { score, description } = gradeDto;

    const instructor = await this.userRepo.findOne({ where: { id } });
    if (instructor) {
      const student = await this.userRepo.findOne({
        where: { id: student_id },
      });
      if (student) {
        const foundCourse = await this.courseRepo.findOne({
          where: { name, id: course_id },
          relations: ['user'],
        });
        if (foundCourse) {
          const foundStudent = await this.studentCourseRepo.find({
            where: { user: student },
            relations: ['course', 'user', 'grade'],
          });
          const oneStudent = foundStudent.map(student => student.course);
          for (const course of oneStudent) {
            if ((course.id = foundCourse.id)) {
              const newStudent = await this.studentCourseRepo.findOne({
                where: { user: student, course: course },
                relations: ['course', 'user', 'grade'],
              });
              const oneGrade = await this.gradeRepo.findOne({
                where: { description },
              });

              newStudent.grade = oneGrade;

              await this.studentCourseRepo.save(newStudent);
              const users = foundStudent.map(user => user.user);
              return {
                name: foundCourse.name,
                id: foundCourse.id,
                instructor: foundCourse.user.name,
                users: {
                  name: newStudent.user.name,
                  id: newStudent.user.id,
                },
                grade: {
                  score: newStudent.grade.score,
                  description: newStudent.grade.description,
                },
              };
            }
            throw new HttpException(
              'this ID doesnt match',
              HttpStatus.NOT_FOUND,
            );
          }
        }
        throw new HttpException('course not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        `the student with this ID ${student_id} doesnt exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException('user is not an instructor', HttpStatus.FORBIDDEN);
  }

  async createGrade(gradeDto: GradeDto, user: any) {
    const { id } = user;
    const foundUser = await this.userRepo.findOne({ where: { id } });
    if (foundUser.accountType === 1) {
      const { score, description } = gradeDto;
      const grade = this.gradeRepo.create({ score, description });
      return await this.gradeRepo.save(grade);
    }
    throw new HttpException(
      'user is not an instructor',
      HttpStatus.BAD_REQUEST,
    );
  }
}

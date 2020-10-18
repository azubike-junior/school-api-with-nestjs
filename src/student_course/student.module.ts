import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from 'src/entity/Courses';
import { Student_course } from 'src/entity/Student_course';
import { User } from 'src/entity/User';
import { StudentResolver } from './student_course.resolver';
import { StudentCourseService } from './student_course.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Courses, Student_course])],
  providers: [StudentCourseService, StudentResolver],
})
export class StudentModule {}

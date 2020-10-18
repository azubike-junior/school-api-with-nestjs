import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from 'src/entity/Courses';
import { Grades } from 'src/entity/Grade';
import { Student_course } from 'src/entity/Student_course';
import { User } from 'src/entity/User';
import { GradeResolver } from './student_grade.resolver';
import { GradeService } from './student_grade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grades, User, Student_course, Courses])],
  providers: [GradeService, GradeResolver],
})
export class GradeModule {}

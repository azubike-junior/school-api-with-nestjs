import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from 'src/entity/Courses';
import { User } from 'src/entity/User';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([Courses, User])],
  providers: [CourseService, CourseResolver],
})
export class CourseModule {}

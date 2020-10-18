import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';

import { AuthGuard } from 'src/shared/auth-guard';
import { Repository } from 'typeorm';
import { StudentInput, StudentType } from './student.gpl';
import { StudentCourseService } from './student_course.service';
import { StudentDto } from './student_dto';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentCourseService) {}

  //register course
  @Mutation(() => StudentType)
  @UseGuards(new AuthGuard())
  async register(
    @Context('user') user: any,
    @Args('input') input: StudentInput,
  ) {
    return await this.studentService.registerCourse(input, user);
  }

  // instructor can get students offering a course
  @Query(() => StudentType)
  @UseGuards(new AuthGuard())
  async students(
    @Context('user') user: any,
    @Args('input') input: StudentInput,
  ) {
    return await this.studentService.students(input, user);
  }

  // student can get all courses
  @Query(() => StudentType)
  @UseGuards(new AuthGuard())
  async studentCourses(@Context('user') user: any) {
    return await this.studentService.getCourses(user);
  }
}

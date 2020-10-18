import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthGuard } from 'src/shared/auth-guard';
import { CourseInput, CourseType } from './course.gpl';
import { CourseService } from './course.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from 'src/entity/Courses';

@Resolver()
export class CourseResolver {
  constructor(
    private readonly courseService: CourseService,
    @InjectRepository(Courses) private courseRepo: Repository<Courses>,
  ) {}

  // only instructor can create course
  @Mutation(() => CourseType)
  @UseGuards(new AuthGuard())
  async create(@Context('user') user, @Args('input') input: CourseInput) {
    const instructor = await this.courseRepo.findOne({ where: { user } });
    if (instructor) {
      throw new HttpException(
        'instructor cant create more than a course',
        HttpStatus.CONFLICT,
      );
    }
    return this.courseService.create(input, user);
  }

  // instructor or student can get one course
  @Query(() => CourseType)
  async oneCourse(@Args('id') { course_id }: CourseInput) {
    const course = await this.courseService.showOne(course_id);
    return course;
  }

  //instructor or student can get all courses
  @Query(() => [CourseType])
  async allCourses() {
    const courses = await this.courseService.showAll();
    return courses;
  }

  // instructor or student can get a course by name
  @Query(() => CourseType)
  async readCourseByName(@Args('name') { name }: CourseInput) {
    const course = await this.courseService.ReadByName(name);
    return course;
  }

  // only instructor can delete a course by id
  @Query(() => CourseType)
  @UseGuards(new AuthGuard())
  async delete(@Context('user') user, @Args('input') { course_id }: CourseInput) {
    return await this.courseService.deleteCourse(course_id, user);
  }
}

import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { AuthGuard } from 'src/shared/auth-guard';
import { GradeService } from './student_grade.service';
import { GradeInput, GradeInput2 } from './student_grade.gpl';
import { CourseInput } from 'src/course/course.gpl';
import { StudentType } from 'src/student_course/student.gpl';

@Resolver()
// instructor can give grade to student
export class GradeResolver {
  constructor(private readonly gradeService: GradeService) {}

  @Query(() => StudentType)
  @UseGuards(new AuthGuard())
  async courseGrade(
    @Context('user') user,
    @Args('input') student_id: GradeInput2,
    @Args('course') courseName: CourseInput,
    @Args('grade') gradeInput: GradeInput,
  ) {
    return await this.gradeService.courseGrade(
      student_id,
      courseName,
      user,
      gradeInput,
    );
  }
}

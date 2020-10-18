import { IsOptional, IsString } from 'class-validator';

export class CourseDto {
  course_id: string;

  name: string;

  date_created: string;

  instructor: string;
}

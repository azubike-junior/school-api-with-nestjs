import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class student_courses {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  date_created: string;

  @Field({ nullable: true })
  instructor: string;
}

@ObjectType()
export class users {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;
}

@ObjectType()
export class grade {
  @Field({ nullable: true })
  score: number;

  @Field({ nullable: true })
  description: string;
}

@ObjectType()
export class StudentType {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  bio: string;

  @Field({ nullable: true })
  instructor: string;

  @Field(type => [student_courses])
  student_courses: student_courses[];

  @Field(type => [users], { nullable: true })
  users: users[];

  @Field(type => grade, { nullable: true })
  grade: grade;
}

@InputType()
export class StudentInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  course_id: string;
}

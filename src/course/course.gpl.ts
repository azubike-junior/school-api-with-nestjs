import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class CourseType {
  @Field() course_id: string;

  @Field()
  name: string;

  @Field()
  date_created: string;

  @Field({ nullable: true })
  instructor: string;

  @Field({ nullable: true })
  message: string;
}

@InputType()
export class CourseInput {
  @Field({ nullable: true })
  course_id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  date_created: string;

  @Field({ nullable: true })
  instructor: string;
}

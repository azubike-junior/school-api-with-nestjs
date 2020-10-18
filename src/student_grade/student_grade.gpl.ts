import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class studen_courses {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  date_created: string;
}

@ObjectType()
export class user {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;
}

@ObjectType()
export class GradeType {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  bio: string;

  @Field(type => [studen_courses])
  student_courses: studen_courses[];

  @Field(type => [user], { nullable: true })
  users: user[];
}

@InputType()
export class GradeInput {
  @Field({ nullable: false })
  score: number;

  @Field() description: string;
}

@InputType()
export class GradeInput2 {
  @Field() student_id: number;
}

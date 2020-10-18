import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field() id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: true })
  bio: string;

  @Field({ nullable: true })
  accountType: number;

  @Field({ nullable: true })
  token: string;

  @Field()
  created_at: string;
}

@InputType()
export class LoginInput {
  @Field({ nullable: false })
  email: string;

  @Field() password: string;
}

@InputType()
export class RegisterInput {
  @Field({ nullable: false })
  name!: string;

  @Field()
  bio!: string;

  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: true })
  created_at: string;
}

@InputType()
export class AuthInput {
  @Field({ nullable: false })
  password: string;
}

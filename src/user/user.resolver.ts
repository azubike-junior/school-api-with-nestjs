import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType, LoginInput, RegisterInput, AuthInput } from './user.gpl';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth-guard';

@Resolver(of => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType])
  async users() {
    return this.userService.showAll();
  }

  @Query(() => UserType)
  @UseGuards(new AuthGuard())
  async user(@Context('user') user) {
    const { id } = user;
    return this.userService.read(id);
  }

  @Mutation(() => UserType)
  async signin(@Args('input') input: LoginInput) {
    return this.userService.login(input);
  }

  @Mutation(() => UserType)
  async signup(
    @Args('input') input: RegisterInput,
    @Args('password') password: AuthInput,
  ) {
    return this.userService.register(input, password);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './database/database.connection.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { LoggingInterceptor } from './shared/logging-interceptor';
import { ValidationPipe } from './shared/validation-pipe';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student_course/student.module';
import { GradeModule } from './student_grade/student_grade.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    UserModule,
    CourseModule,
    StudentModule,
    GradeModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}

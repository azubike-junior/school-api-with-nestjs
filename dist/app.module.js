"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_connection_service_1 = require("./database/database.connection.service");
const user_module_1 = require("./user/user.module");
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("./shared/logging-interceptor");
const validation_pipe_1 = require("./shared/validation-pipe");
const course_module_1 = require("./course/course.module");
const student_module_1 = require("./student_course/student.module");
const student_grade_module_1 = require("./student_grade/student_grade.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: database_connection_service_1.DatabaseConnectionService,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                playground: true,
                context: ({ req }) => ({ headers: req.headers }),
            }),
            user_module_1.UserModule,
            course_module_1.CourseModule,
            student_module_1.StudentModule,
            student_grade_module_1.GradeModule,
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: validation_pipe_1.ValidationPipe,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
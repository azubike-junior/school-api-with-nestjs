"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../shared/auth-guard");
const course_gpl_1 = require("./course.gpl");
const course_service_1 = require("./course.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Courses_1 = require("../entity/Courses");
let CourseResolver = class CourseResolver {
    constructor(courseService, courseRepo) {
        this.courseService = courseService;
        this.courseRepo = courseRepo;
    }
    async create(user, input) {
        const instructor = await this.courseRepo.findOne({ where: { user } });
        if (instructor) {
            throw new common_1.HttpException('instructor cant create more than a course', common_1.HttpStatus.CONFLICT);
        }
        return this.courseService.create(input, user);
    }
    async oneCourse({ course_id }) {
        const course = await this.courseService.showOne(course_id);
        return course;
    }
    async allCourses() {
        const courses = await this.courseService.showAll();
        return courses;
    }
    async readCourseByName({ name }) {
        const course = await this.courseService.ReadByName(name);
        return course;
    }
    async delete(user, { course_id }) {
        return await this.courseService.deleteCourse(course_id, user);
    }
};
__decorate([
    graphql_1.Mutation(() => course_gpl_1.CourseType),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')), __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, course_gpl_1.CourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "create", null);
__decorate([
    graphql_1.Query(() => course_gpl_1.CourseType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_gpl_1.CourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "oneCourse", null);
__decorate([
    graphql_1.Query(() => [course_gpl_1.CourseType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "allCourses", null);
__decorate([
    graphql_1.Query(() => course_gpl_1.CourseType),
    __param(0, graphql_1.Args('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_gpl_1.CourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "readCourseByName", null);
__decorate([
    graphql_1.Query(() => course_gpl_1.CourseType),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')), __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, course_gpl_1.CourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "delete", null);
CourseResolver = __decorate([
    graphql_1.Resolver(),
    __param(1, typeorm_1.InjectRepository(Courses_1.Courses)),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        typeorm_2.Repository])
], CourseResolver);
exports.CourseResolver = CourseResolver;
//# sourceMappingURL=course.resolver.js.map
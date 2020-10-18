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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Courses_1 = require("../entity/Courses");
const typeorm_2 = require("typeorm");
const User_1 = require("../entity/User");
let CourseService = class CourseService {
    constructor(courseRepo, userRepo) {
        this.courseRepo = courseRepo;
        this.userRepo = userRepo;
    }
    async create(data, user) {
        let { id } = user;
        let { name } = data;
        const oneCourse = await this.courseRepo.findOne({ where: { name } });
        const oneUser = await this.userRepo.findOne({ where: { id } });
        if (oneUser.accountType === 1) {
            if (!oneCourse) {
                const users = new User_1.User();
                users.id = id;
                await this.userRepo.save(users);
                let course = new Courses_1.Courses();
                course.name = name;
                course.date_created = new Date();
                course.user = users;
                await this.courseRepo.save(course);
                return {
                    id: course.id,
                    name: course.name,
                    date_created: course.date_created,
                    instructor: oneUser.name,
                };
            }
            throw new common_1.HttpException(`this course already exists`, common_1.HttpStatus.BAD_REQUEST);
        }
        throw new common_1.HttpException(`Unauthorized access`, common_1.HttpStatus.BAD_REQUEST);
    }
    async showOne(id) {
        const course = await this.courseRepo.findOne({
            where: { id },
            relations: ['user'],
        });
        if (course.id !== id) {
            throw new common_1.HttpException(`No course with this ID ${id} is found`, common_1.HttpStatus.NOT_FOUND);
        }
        return {
            id: course.id,
            name: course.name,
            date_created: course.date_created,
            instructor: course.user.name,
        };
    }
    async showAll() {
        const courses = await this.courseRepo.find({ relations: ['user'] });
        courses.forEach(course => {
            return {
                id: course.id,
                name: course.name,
                date_created: course.date_created,
                instructor: course.user.name,
            };
        });
        return courses;
    }
    async ReadByName(name) {
        const course = await this.courseRepo.findOne({
            where: { name },
            relations: ['user'],
        });
        return {
            id: course.id,
            name: course.name,
            date_created: course.date_created,
            instructor: course.user.name,
        };
    }
    async deleteCourse(course_id, user) {
        const { id } = user;
        const foundUser = await this.userRepo.findOne({ where: { id } });
        if (foundUser.accountType === 1) {
            const course = await this.courseRepo.findOne({
                where: { id: course_id },
            });
            if (course) {
                await this.courseRepo.delete({ id: course_id });
                return {
                    message: `course with this ID ${course_id} has been deleted`,
                };
            }
            throw new common_1.HttpException(`No course with this ID ${course_id} is found`, common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException(`user is not an instructor`, common_1.HttpStatus.UNAUTHORIZED);
    }
};
CourseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Courses_1.Courses)),
    __param(1, typeorm_1.InjectRepository(User_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map
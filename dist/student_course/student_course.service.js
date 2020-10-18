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
exports.StudentCourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const User_1 = require("../entity/User");
const Courses_1 = require("../entity/Courses");
const Student_course_1 = require("../entity/Student_course");
const Grade_1 = require("../entity/Grade");
let StudentCourseService = class StudentCourseService {
    constructor(studentCourseRepo, userRepo, courseRepo) {
        this.studentCourseRepo = studentCourseRepo;
        this.userRepo = userRepo;
        this.courseRepo = courseRepo;
    }
    async registerCourse(data, user) {
        const { id } = user;
        let { course_id, name } = data;
        const foundUser = await this.userRepo.findOne({
            where: { id },
            relations: ['student_courses'],
        });
        const foundCourse = await this.courseRepo.findOne({
            where: { name, id: course_id },
            relations: ['student_courses'],
        });
        const newStudent = await this.studentCourseRepo.findOne({
            where: { user: foundUser, course: foundCourse },
            relations: ['course', 'user', 'grade'],
        });
        if (foundUser && foundUser.accountType === 0) {
            if (foundCourse) {
                const grade = new Grade_1.Grades();
                grade.description = null;
                grade.score = null;
                const studentCourse = new Student_course_1.Student_course(foundCourse, foundUser, null);
                await this.studentCourseRepo.save(studentCourse);
                const studentCourses = await this.studentCourseRepo.find({
                    where: { user: foundUser },
                    relations: ['user', 'course'],
                });
                const oneUser = studentCourses.map(studentCourse => studentCourse.course);
                return {
                    name: foundUser.name,
                    id: foundUser.id,
                    bio: foundUser.bio,
                    student_courses: oneUser,
                    grade: {
                        score: newStudent.grade.score,
                        description: newStudent.grade.description,
                    },
                };
            }
            throw new common_1.HttpException('course doesnt exist in this dept', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('user is not a student', common_1.HttpStatus.BAD_REQUEST);
    }
    async students(data, user) {
        const { name } = data;
        const { id } = user;
        const foundCourse = await this.courseRepo.findOne({
            where: { name },
            relations: ['user'],
        });
        const student = await this.studentCourseRepo.find({
            where: { course: foundCourse },
            relations: ['user', 'course'],
        });
        const instructor = await this.userRepo.findOne({ where: { id } });
        if (instructor && instructor.accountType === 1) {
            if (foundCourse) {
                const users = student.map(user => user.user);
                const courses = student.map(course => course);
                const grade = student.map(grades => grades);
                return {
                    name: foundCourse.name,
                    id: foundCourse.id,
                    instructor: foundCourse.user.name,
                    student_course: courses,
                    grade,
                };
            }
            throw new common_1.HttpException('course doesnt exist in this dept', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.HttpException('only instructor can see students', common_1.HttpStatus.UNAUTHORIZED);
    }
    async getCourses(user) {
        const { id } = user;
        const foundUser = await this.userRepo.findOne({ where: { id } });
        if (foundUser) {
            const userCourses = await this.studentCourseRepo.find({
                where: { user: foundUser },
                relations: ['course'],
            });
            const allCourses = userCourses.map(oneCourse => oneCourse.course);
            return {
                student_courses: allCourses,
            };
        }
        throw new common_1.HttpException('user is not a student', common_1.HttpStatus.NOT_FOUND);
    }
};
StudentCourseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Student_course_1.Student_course)),
    __param(1, typeorm_1.InjectRepository(User_1.User)),
    __param(2, typeorm_1.InjectRepository(Courses_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentCourseService);
exports.StudentCourseService = StudentCourseService;
//# sourceMappingURL=student_course.service.js.map
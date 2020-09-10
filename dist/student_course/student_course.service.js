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
const Student_courses_1 = require("../entity/Student_courses");
const typeorm_2 = require("typeorm");
const User_1 = require("../entity/User");
const Courses_1 = require("../entity/Courses");
let StudentCourseService = class StudentCourseService {
    constructor(studentRepo, userRepo, courseRepo) {
        this.studentRepo = studentRepo;
        this.userRepo = userRepo;
        this.courseRepo = courseRepo;
    }
    async register() { }
};
StudentCourseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Student_courses_1.Student_course)),
    __param(1, typeorm_1.InjectRepository(User_1.User)),
    __param(2, typeorm_1.InjectRepository(Courses_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentCourseService);
exports.StudentCourseService = StudentCourseService;
//# sourceMappingURL=student_course.service.js.map
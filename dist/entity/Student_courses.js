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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student_course = void 0;
const typeorm_1 = require("typeorm");
const Courses_1 = require("./Courses");
const Grade_1 = require("./Grade");
const User_1 = require("./User");
let Student_course = class Student_course {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Student_course.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1.User, (user) => user.student_courses),
    typeorm_1.JoinColumn({ name: 'student_id' }),
    __metadata("design:type", User_1.User)
], Student_course.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => Courses_1.Courses, (course) => course.student_courses),
    typeorm_1.JoinColumn({ name: 'course_id' }),
    __metadata("design:type", Courses_1.Courses)
], Student_course.prototype, "course", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Grade_1.Grades),
    typeorm_1.JoinColumn({ name: 'grades' }),
    __metadata("design:type", Grade_1.Grades)
], Student_course.prototype, "grade", void 0);
Student_course = __decorate([
    typeorm_1.Entity()
], Student_course);
exports.Student_course = Student_course;
//# sourceMappingURL=Student_courses.js.map
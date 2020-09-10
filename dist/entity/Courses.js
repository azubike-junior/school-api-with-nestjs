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
exports.Courses = void 0;
const typeorm_1 = require("typeorm");
const Student_courses_1 = require("./Student_courses");
const User_1 = require("./User");
let Courses = class Courses {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Courses.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Courses.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'date' }),
    __metadata("design:type", Date)
], Courses.prototype, "date_created", void 0);
__decorate([
    typeorm_1.OneToOne((type) => User_1.User),
    typeorm_1.JoinColumn({ name: 'instructor' }),
    __metadata("design:type", User_1.User)
], Courses.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany((type) => Student_courses_1.Student_course, (student_courses) => student_courses.course),
    __metadata("design:type", Array)
], Courses.prototype, "student_courses", void 0);
Courses = __decorate([
    typeorm_1.Entity()
], Courses);
exports.Courses = Courses;
//# sourceMappingURL=Courses.js.map
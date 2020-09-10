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
exports.Grades = void 0;
const typeorm_1 = require("typeorm");
const Student_courses_1 = require("./Student_courses");
let Grades = class Grades {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
    __metadata("design:type", Number)
], Grades.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Grades.prototype, "score", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Grades.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => Student_courses_1.Student_course, (student_grade) => student_grade.grade),
    __metadata("design:type", Student_courses_1.Student_course)
], Grades.prototype, "grade", void 0);
Grades = __decorate([
    typeorm_1.Entity()
], Grades);
exports.Grades = Grades;
//# sourceMappingURL=Grade.js.map
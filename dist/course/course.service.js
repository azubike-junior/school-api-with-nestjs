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
    async showAll() {
        return await this.courseRepo.find();
    }
    async ReadByName(name) {
        return await this.courseRepo.findOne({ where: { name } });
    }
    async ReadByInstructor(instructor) {
        return await this.courseRepo.find({ where: { instructor } });
    }
    async create(courseData) {
        return this.courseRepo.create(courseData);
    }
};
CourseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Courses_1.Courses)), __param(1, typeorm_1.InjectRepository(User_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map
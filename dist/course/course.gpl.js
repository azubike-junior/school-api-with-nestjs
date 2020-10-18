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
exports.CourseInput = exports.CourseType = void 0;
const graphql_1 = require("@nestjs/graphql");
let CourseType = class CourseType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CourseType.prototype, "course_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CourseType.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CourseType.prototype, "date_created", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CourseType.prototype, "instructor", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CourseType.prototype, "message", void 0);
CourseType = __decorate([
    graphql_1.ObjectType()
], CourseType);
exports.CourseType = CourseType;
let CourseInput = class CourseInput {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CourseInput.prototype, "course_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CourseInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CourseInput.prototype, "date_created", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CourseInput.prototype, "instructor", void 0);
CourseInput = __decorate([
    graphql_1.InputType()
], CourseInput);
exports.CourseInput = CourseInput;
//# sourceMappingURL=course.gpl.js.map
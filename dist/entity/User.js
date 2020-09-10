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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Student_courses_1 = require("./Student_courses");
const Account_type_1 = require("./Account_type");
const jwt = require("jsonwebtoken");
let User = class User {
    constructor() {
        this.toResponseObject = (showToken = true) => {
            const { id, name, bio, created_at, email, token } = this;
            const responseObject = { id, name, bio, email, created_at, token };
            if (showToken) {
                responseObject.token = token;
            }
            return responseObject;
        };
    }
    get token() {
        const { id } = this;
        return jwt.sign({
            id,
        }, process.env.SECRET, { expiresIn: '7d' });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'name', nullable: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar', { unique: true, length: 200, nullable: false }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'bio', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "created_at", void 0);
__decorate([
    typeorm_1.OneToOne(type => Account_type_1.Account_type),
    typeorm_1.JoinColumn({ name: 'account_type' }),
    __metadata("design:type", Account_type_1.Account_type)
], User.prototype, "account", void 0);
__decorate([
    typeorm_1.OneToMany(type => Student_courses_1.Student_course, student_courses => student_courses.user),
    __metadata("design:type", Array)
], User.prototype, "student_courses", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map
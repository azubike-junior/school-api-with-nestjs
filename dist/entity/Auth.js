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
exports.Auth = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
const User_1 = require("./User");
let Auth = class Auth {
    constructor() {
        this.comparePassword = async (attempt) => {
            return await bcrypt.compare(attempt, this.password);
        };
    }
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
    __metadata("design:type", Number)
], Auth.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], Auth.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "user_id", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Auth.prototype, "hashPassword", null);
__decorate([
    typeorm_1.OneToOne(type => User_1.User),
    typeorm_1.JoinColumn({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Auth.prototype, "user", void 0);
Auth = __decorate([
    typeorm_1.Entity()
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=Auth.js.map
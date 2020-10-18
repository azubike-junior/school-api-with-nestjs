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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const User_1 = require("../entity/User");
const typeorm_2 = require("typeorm");
const Auth_1 = require("../entity/Auth");
const moment = require("moment");
let UserService = class UserService {
    constructor(userRepo, authRepo) {
        this.userRepo = userRepo;
        this.authRepo = authRepo;
    }
    async showAll() {
        const users = await this.userRepo.find();
        console.log(users);
        return users.map(user => user.toResponseObject(false));
    }
    async read(id) {
        const user = await this.userRepo.findOne({ where: { id } });
        return user.toResponseObject(false);
    }
    async register(data, authPassword) {
        let { name, email, bio } = data;
        let { password } = authPassword;
        let user = await this.userRepo.findOne({ where: { email } });
        console.log('====', user);
        if (user) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const today = moment().format();
        const newData = {
            name,
            email,
            bio,
            created_at: today,
        };
        user = this.userRepo.create(newData);
        await this.userRepo.save(user);
        let user_id = this.userRepo.getId(user);
        const authData = {
            password,
            created_at: today,
            user_id,
        };
        const authPass = this.authRepo.create(authData);
        await this.authRepo.save(authPass);
        return user.toResponseObject(true);
    }
    async login(data) {
        const { email, password } = data;
        const foundEmail = await this.userRepo.findOne({ where: { email } });
        if (foundEmail) {
            const { id } = foundEmail;
            const user = await this.authRepo.findOne({
                where: { user_id: id },
            });
            if (user) {
                let isMatch = await user.comparePassword(password);
                if (isMatch) {
                    return foundEmail.toResponseObject(true);
                }
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.BAD_REQUEST);
    }
    async updateUser(id, data) {
        await this.userRepo.update({ id }, data);
        return await this.userRepo.findOne({ id });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(User_1.User)),
    __param(1, typeorm_1.InjectRepository(Auth_1.Auth)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_gpl_1 = require("./user.gpl");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../shared/auth-guard");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async users() {
        return this.userService.showAll();
    }
    async user(user) {
        const { id } = user;
        return this.userService.read(id);
    }
    async signin(input) {
        return this.userService.login(input);
    }
    async signup(input, password) {
        return this.userService.register(input, password);
    }
};
__decorate([
    graphql_1.Query(() => [user_gpl_1.UserType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    graphql_1.Query(() => user_gpl_1.UserType),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    graphql_1.Mutation(() => user_gpl_1.UserType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_gpl_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signin", null);
__decorate([
    graphql_1.Mutation(() => user_gpl_1.UserType),
    __param(0, graphql_1.Args('input')),
    __param(1, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_gpl_1.RegisterInput,
        user_gpl_1.AuthInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signup", null);
UserResolver = __decorate([
    graphql_1.Resolver(of => user_gpl_1.UserType),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map
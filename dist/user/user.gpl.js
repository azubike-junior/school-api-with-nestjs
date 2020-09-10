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
exports.AuthInput = exports.RegisterInput = exports.LoginInput = exports.UserType = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserType = class UserType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "bio", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UserType.prototype, "account_type", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "token", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "created_at", void 0);
UserType = __decorate([
    graphql_1.ObjectType()
], UserType);
exports.UserType = UserType;
let LoginInput = class LoginInput {
};
__decorate([
    graphql_1.Field({ nullable: false }),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    graphql_1.InputType()
], LoginInput);
exports.LoginInput = LoginInput;
let RegisterInput = class RegisterInput {
};
__decorate([
    graphql_1.Field({ nullable: false }),
    __metadata("design:type", String)
], RegisterInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], RegisterInput.prototype, "bio", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], RegisterInput.prototype, "account_type", void 0);
__decorate([
    graphql_1.Field({ nullable: false }),
    __metadata("design:type", String)
], RegisterInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], RegisterInput.prototype, "created_at", void 0);
RegisterInput = __decorate([
    graphql_1.InputType()
], RegisterInput);
exports.RegisterInput = RegisterInput;
let AuthInput = class AuthInput {
};
__decorate([
    graphql_1.Field({ nullable: false }),
    __metadata("design:type", String)
], AuthInput.prototype, "password", void 0);
AuthInput = __decorate([
    graphql_1.InputType()
], AuthInput);
exports.AuthInput = AuthInput;
//# sourceMappingURL=user.gpl.js.map
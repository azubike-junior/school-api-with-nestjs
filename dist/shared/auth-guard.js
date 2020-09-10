"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const graphql_1 = require("@nestjs/graphql");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
        if (!ctx.headers.authorization) {
            throw new common_1.HttpException('Unauthorised Access', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = await this.verifyToken(ctx.headers.authorization);
        ctx.user = token;
        return true;
    }
    async verifyToken(auth) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.FORBIDDEN);
        }
        const token = auth.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.SECRET);
            return decoded;
        }
        catch (e) {
            const message = 'Token error' + (e.message || e.name);
            throw new common_1.HttpException(message, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AuthGuard = __decorate([
    common_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.js.map
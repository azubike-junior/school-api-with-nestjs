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
const typeorm_1 = require("typeorm");
const Account_type_1 = require("../../entity/Account_type");
const typeorm_2 = require("@nestjs/typeorm");
class CreateAccountType {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Account_type_1.Account_type)
            .values([
            { id: 1, name: 'student' },
            { id: 2, name: 'instructor' },
            { id: 3, name: 'chancellor' },
        ])
            .execute();
    }
}
__decorate([
    typeorm_2.InjectRepository(Account_type_1.Account_type),
    __metadata("design:type", typeorm_1.Repository)
], CreateAccountType.prototype, "accountRepo", void 0);
exports.default = CreateAccountType;
//# sourceMappingURL=account.seeder.js.map
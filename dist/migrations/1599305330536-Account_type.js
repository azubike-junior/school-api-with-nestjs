"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountType1599305330536 = void 0;
const typeorm_1 = require("typeorm");
const seed_data_1 = require("../database/seed.data");
class AccountType1599305330536 {
    async up(queryRunner) {
        const acc = await typeorm_1.getRepository('Account_type').save(seed_data_1.accountData);
        return acc;
    }
    async down(queryRunner) { }
}
exports.AccountType1599305330536 = AccountType1599305330536;
//# sourceMappingURL=1599305330536-Account_type.js.map
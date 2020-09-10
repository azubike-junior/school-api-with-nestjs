"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Account_type_1 = require("../../entity/Account_type");
typeorm_seeding_1.define(Account_type_1.Account_type, (faker) => {
    const names = [
        'student',
        'instructor'
    ];
    const user = new Account_type_1.Account_type();
    user.name = `${names[0]}`;
    return user;
});
//# sourceMappingURL=account.factory.js.map
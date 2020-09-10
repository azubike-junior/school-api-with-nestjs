"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Account_type_1 = require("../entity/Account_type");
typeorm_seeding_1.define(Account_type_1.Account_type, (faker) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const user = new User();
    user.name = `${firstName} ${lastName}`;
    user.password = faker.random.word();
    return user;
});
//# sourceMappingURL=account.factory.js.map
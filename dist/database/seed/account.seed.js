"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_type_1 = require("../../entity/Account_type");
class CreateAccount {
    async run(factory, connection) {
        await factory(Account_type_1.Account_type)().create();
    }
}
exports.default = CreateAccount;
//# sourceMappingURL=account.seed.js.map
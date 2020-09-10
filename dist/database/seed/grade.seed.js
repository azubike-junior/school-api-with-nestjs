"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grade_1 = require("../../entity/Grade");
class CreateAccount {
    async run(factory, connection) {
        await factory(Grade_1.Grades)().create();
    }
}
exports.default = CreateAccount;
//# sourceMappingURL=grade.seed.js.map
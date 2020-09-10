"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grade_1 = require("../../entity/Grade");
class CreateUsers {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Grade_1.Grades)
            .values([
            {
                id: 1,
                score: 44,
                description: 'F',
            },
            {
                id: 2,
                score: 49,
                description: 'D',
            },
            {
                id: 3,
                score: 59,
                description: 'C',
            },
            {
                id: 4,
                score: 69,
                description: 'B',
            },
            {
                id: 4,
                score: 90,
                description: 'A',
            },
        ])
            .execute();
    }
}
exports.default = CreateUsers;
//# sourceMappingURL=grade.seeder.js.map
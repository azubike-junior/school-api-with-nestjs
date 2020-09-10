"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Grade_1 = require("../../entity/Grade");
typeorm_seeding_1.define(Grade_1.Grades, (faker) => {
    const gradeData = [
        {
            id: 1,
            score: 44,
            description: 'F'
        },
        {
            id: 2,
            score: 49,
            description: 'D'
        },
        {
            id: 3,
            score: 59,
            description: 'C'
        },
        {
            id: 4,
            score: 69,
            description: 'B'
        },
        {
            id: 4,
            score: 90,
            description: 'A'
        }
    ];
    const grade = new Grade_1.Grades();
    grade.score = Number(`${gradeData[4].score}`);
    grade.description = `${gradeData[4].description}`;
    return grade;
});
//# sourceMappingURL=grade.factory.js.map
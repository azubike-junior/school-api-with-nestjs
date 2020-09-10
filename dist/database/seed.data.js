"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeData = exports.coursesData = exports.accountData = void 0;
const User_1 = require("../entity/User");
exports.accountData = [
    { id: 1, name: 'student' },
    { id: 2, name: 'instructor' },
    { id: 3, name: 'chancellor' },
];
exports.coursesData = [
    {
        id: 'jjfkfk40-222222',
        name: 'pol101',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: 'd34-444eeee',
        name: 'pol202',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: 'eer233-311',
        name: 'english101',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: '34qq23334',
        name: 'sms101',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: '22234rrre',
        name: 'maths103',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: 'rrt3344-2',
        name: 'agric103',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: '12-eeeeee',
        name: 'stat105',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
    {
        id: '12-erfe',
        name: 'phy123',
        date_created: Date.now(),
        user: User_1.User.prototype,
    },
];
exports.gradeData = [
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
];
//# sourceMappingURL=seed.data.js.map
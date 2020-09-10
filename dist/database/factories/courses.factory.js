"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Courses_1 = require("../../entity/Courses");
typeorm_seeding_1.define(Courses_1.Courses, (faker) => {
    coursesData = [
        {
            id: 'jjfkfk40-222222',
            name: 'pol101',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: 'd34-444eeee',
            name: 'pol202',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: 'eer233-311',
            name: 'english101',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: '34qq23334',
            name: 'sms101',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: '22234rrre',
            name: 'maths103',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: 'rrt3344-2',
            name: 'agric103',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: '12-eeeeee',
            name: 'stat105',
            date_created: Date.now(),
            user: User.prototype
        },
        {
            id: '12-erfe',
            name: 'phy123',
            date_created: Date.now(),
            user: User.prototype
        }
    ];
    const course = new Courses_1.Courses();
    course.name = `${names[0]}`;
    return course;
});
//# sourceMappingURL=courses.factory.js.map
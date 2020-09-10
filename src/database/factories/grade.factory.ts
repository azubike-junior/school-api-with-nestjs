// user.factory.ts
import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Grades } from '../../entity/Grade';

define(Grades, (faker: typeof Faker) => {
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

	const grade = new Grades();

	grade.score = Number(`${gradeData[4].score}`);
	grade.description = `${gradeData[4].description}`;
	return grade;
});

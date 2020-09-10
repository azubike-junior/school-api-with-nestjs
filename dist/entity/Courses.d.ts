import { Student_course } from './Student_courses';
import { User } from './User';
export declare class Courses {
    id: string;
    name: string;
    date_created: Date;
    user: User;
    student_courses: Student_course[];
}

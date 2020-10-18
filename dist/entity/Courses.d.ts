import { Student_course } from './Student_course';
import { User } from './User';
export declare class Courses {
    id: string;
    name: string;
    date_created: Date;
    student_courses: Student_course[];
    user: User;
}

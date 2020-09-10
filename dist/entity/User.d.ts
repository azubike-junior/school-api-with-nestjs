import { Student_course } from './Student_courses';
import { Account_type } from './Account_type';
export declare class User {
    id: string;
    name: string;
    email: string;
    bio: string;
    created_at: string;
    account: Account_type;
    student_courses: Student_course[];
    get token(): string;
    toResponseObject: (showToken?: boolean) => {
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    };
}

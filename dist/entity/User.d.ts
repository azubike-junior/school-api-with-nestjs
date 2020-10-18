import { Student_course } from './Student_course';
export declare enum account {
    student = 0,
    instructor = 1
}
export declare class User {
    id: number;
    name: string;
    email: string;
    bio: string;
    created_at: string;
    accountType: account;
    student_courses: Array<Student_course>;
    get token(): string;
    toResponseObject: (showToken?: boolean) => {
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: account;
        created_at: string;
        token: string;
    };
}

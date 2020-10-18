import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { Courses } from 'src/entity/Courses';
import { StudentDto } from './student_dto';
import { Student_course } from 'src/entity/Student_course';
export declare class StudentCourseService {
    private studentCourseRepo;
    private userRepo;
    private courseRepo;
    constructor(studentCourseRepo: Repository<Student_course>, userRepo: Repository<User>, courseRepo: Repository<Courses>);
    registerCourse(data: StudentDto, user: any): Promise<{
        name: string;
        id: number;
        bio: string;
        student_courses: Courses[];
        grade: {
            score: number;
            description: string;
        };
    }>;
    students(data: StudentDto, user: any): Promise<{
        name: string;
        id: string;
        instructor: string;
        student_course: Student_course[];
        grade: Student_course[];
    }>;
    getCourses(user: any): Promise<{
        student_courses: Courses[];
    }>;
}

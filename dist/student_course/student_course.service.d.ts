import { Student_course } from 'src/entity/Student_courses';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { Courses } from 'src/entity/Courses';
export declare class StudentCourseService {
    private studentRepo;
    private userRepo;
    private courseRepo;
    constructor(studentRepo: Repository<Student_course>, userRepo: Repository<User>, courseRepo: Repository<Courses>);
    register(): Promise<void>;
}

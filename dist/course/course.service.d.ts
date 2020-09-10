import { Courses } from 'src/entity/Courses';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
export declare class CourseService {
    private courseRepo;
    private userRepo;
    constructor(courseRepo: Repository<Courses>, userRepo: Repository<User>);
    showAll(): Promise<Courses[]>;
    ReadByName(name: string): Promise<Courses>;
    ReadByInstructor(instructor: string): Promise<Courses[]>;
    create(courseData: {}): Promise<Courses>;
}

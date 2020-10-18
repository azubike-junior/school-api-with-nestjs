import { Courses } from 'src/entity/Courses';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { CourseDto } from './course.dto';
export declare class CourseService {
    private courseRepo;
    private userRepo;
    constructor(courseRepo: Repository<Courses>, userRepo: Repository<User>);
    create(data: CourseDto, user: any): Promise<{
        id: string;
        name: string;
        date_created: Date;
        instructor: string;
    }>;
    showOne(id: string): Promise<{
        id: string;
        name: string;
        date_created: Date;
        instructor: string;
    }>;
    showAll(): Promise<Courses[]>;
    ReadByName(name: string): Promise<{
        id: string;
        name: string;
        date_created: Date;
        instructor: string;
    }>;
    deleteCourse(course_id: string, user: any): Promise<{
        message: string;
    }>;
}

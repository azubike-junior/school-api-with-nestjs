import { CourseInput } from './course.gpl';
import { CourseService } from './course.service';
import { Repository } from 'typeorm';
import { Courses } from 'src/entity/Courses';
export declare class CourseResolver {
    private readonly courseService;
    private courseRepo;
    constructor(courseService: CourseService, courseRepo: Repository<Courses>);
    create(user: any, input: CourseInput): Promise<{
        id: string;
        name: string;
        date_created: Date;
        instructor: string;
    }>;
    oneCourse({ course_id }: CourseInput): Promise<{
        id: string;
        name: string;
        date_created: Date;
        instructor: string;
    }>;
    allCourses(): Promise<Courses[]>;
    readCourseByName({ name }: CourseInput): Promise<{
        id: string;
        name: string;
        date_created: Date;
        instructor: string;
    }>;
    delete(user: any, { course_id }: CourseInput): Promise<{
        message: string;
    }>;
}

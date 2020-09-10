import { UserService } from './user.service';
import { LoginInput, RegisterInput, AuthInput } from './user.gpl';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }[]>;
    user(user: any): Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }>;
    login(input: LoginInput): Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }>;
    register(input: RegisterInput, password: AuthInput): Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }>;
}

import { UserService } from './user.service';
import { LoginInput, RegisterInput, AuthInput } from './user.gpl';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }[]>;
    user(user: any): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }>;
    signin(input: LoginInput): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }>;
    signup(input: RegisterInput, password: AuthInput): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }>;
}

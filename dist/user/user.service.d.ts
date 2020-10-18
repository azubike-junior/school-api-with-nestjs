import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { LoginDTO, RegisterDTO, AuthDTO } from './user.dto';
import { Auth } from 'src/entity/Auth';
export declare class UserService {
    private userRepo;
    private authRepo;
    constructor(userRepo: Repository<User>, authRepo: Repository<Auth>);
    showAll(): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }[]>;
    read(id: number): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }>;
    register(data: RegisterDTO, authPassword: AuthDTO): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }>;
    login(data: LoginDTO): Promise<{
        id: number;
        name: string;
        bio: string;
        email: string;
        accountType: import("../entity/User").account;
        created_at: string;
        token: string;
    }>;
    updateUser(id: number, data: RegisterDTO): Promise<User>;
}

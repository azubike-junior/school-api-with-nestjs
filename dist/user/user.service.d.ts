import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { LoginDTO, RegisterDTO, AuthDTO } from './user.dto';
import { Auth } from 'src/entity/Auth';
import { Account_type } from 'src/entity/Account_type';
export declare class UserService {
    private userRepo;
    private authRepo;
    private accountRepo;
    constructor(userRepo: Repository<User>, authRepo: Repository<Auth>, accountRepo: Repository<Account_type>);
    showAll(): Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }[]>;
    read(id: string): Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }>;
    register: (data: RegisterDTO, authPassword: AuthDTO) => Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }>;
    login: (data: LoginDTO) => Promise<{
        id: string;
        name: string;
        bio: string;
        email: string;
        created_at: string;
        token: string;
    }>;
    updateUser: (id: string, data: RegisterDTO) => Promise<User>;
}

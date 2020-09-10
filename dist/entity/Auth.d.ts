import { User } from './User';
export declare class Auth {
    id: number;
    password: string;
    created_at: string;
    user_id: string;
    hashPassword(): Promise<void>;
    comparePassword: (attempt: string) => Promise<boolean>;
    user: User;
}

export declare class UserType {
    id: string;
    name: string;
    email: string;
    bio: string;
    account_type: number;
    token: string;
    created_at: string;
}
export declare class LoginInput {
    email: string;
    password: string;
}
export declare class RegisterInput {
    name: string;
    bio: string;
    account_type: number;
    email: string;
    created_at: string;
}
export declare class AuthInput {
    password: string;
}

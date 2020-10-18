export declare class UserType {
    id: number;
    name: string;
    email: string;
    bio: string;
    accountType: number;
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
    email: string;
    created_at: string;
}
export declare class AuthInput {
    password: string;
}

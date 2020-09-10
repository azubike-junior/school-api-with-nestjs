import { IsEmail, IsString, IsOptional, IsNumber, IsDate } from 'class-validator';

export class LoginDTO {
	@IsEmail() email: string;

	@IsString() password: string;
}

export class RegisterDTO {
	@IsString() name: string;

	@IsEmail() email: string;

	@IsOptional()
	@IsString()
	bio: string;

	@IsNumber()
	@IsOptional()
	account_type: number;

	@IsOptional() created_at: string;
}

export class AuthDTO {
	@IsString() password: string;
}

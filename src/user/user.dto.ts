import {
  IsEmail,
  IsString,
  IsOptional,
  IsNumber,
  IsDate,
} from 'class-validator';

export class LoginDTO {
  @IsEmail() email: string;

  @IsString() password: string;
}

export class UserDTO {
  student_id: number;
}

export class RegisterDTO {
  name: string;

  email: string;

  bio: string;

  created_at: string;
}

export class AuthDTO {
  @IsString() password: string;
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { LoginDTO, RegisterDTO, AuthDTO } from './user.dto';
import { Auth } from 'src/entity/Auth';
import * as moment from 'moment';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Auth) private authRepo: Repository<Auth>,
  ) {}

  async showAll() {
    const users = await this.userRepo.find();
    console.log(users);
    return users.map(user => user.toResponseObject(false));
  }

  async read(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    return user.toResponseObject(false);
  }

  async register(data: RegisterDTO, authPassword: AuthDTO) {
    let { name, email, bio } = data;
    let { password } = authPassword;
    let user = await this.userRepo.findOne({ where: { email } });
    console.log('====', user);
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const today = moment().format();
    const newData = {
      name,
      email,
      bio,
      created_at: today,
    };
    user = this.userRepo.create(newData);
    await this.userRepo.save(user);
    let user_id = this.userRepo.getId(user);
    const authData = {
      password,
      created_at: today,
      user_id,
    };
    const authPass = this.authRepo.create(authData);
    await this.authRepo.save(authPass);
    return user.toResponseObject(true);
  }

  async login(data: LoginDTO) {
    const { email, password } = data;
    const foundEmail = await this.userRepo.findOne({ where: { email } });
    if (foundEmail) {
      const { id } = foundEmail;
      const user = await this.authRepo.findOne({
        where: { user_id: id },
      });
      if (user) {
        let isMatch = await user.comparePassword(password);
        if (isMatch) {
          return foundEmail.toResponseObject(true);
        }
        throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
      }
    }
    throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
  }

  async updateUser(id: number, data: RegisterDTO) {
    await this.userRepo.update({ id }, data);
    return await this.userRepo.findOne({ id });
  }
}

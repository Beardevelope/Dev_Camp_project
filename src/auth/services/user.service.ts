import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.getUserByEmail(createUserDto.email);
    if (user) {
      throw new BadRequestException(
        `${createUserDto.email} already exists`,
        'user',
      );
    }
    const hashedPassword = await argon2.hash(createUserDto.password);
    return this.userRepository.createUser(createUserDto, hashedPassword);
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

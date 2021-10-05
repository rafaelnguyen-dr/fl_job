import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User, { UserRepository } from 'entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly usersRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findAllLeaders(): Promise<User[]> {
    return this.usersRepository.find({
      where: {
        is_leader: true,
      },
    });
  }
}

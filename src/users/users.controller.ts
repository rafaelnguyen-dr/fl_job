import { Controller, Get, Inject } from '@nestjs/common';
import { User } from 'resources';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  @Inject()
  private readonly usersService: UsersService;

  @Get('/')
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    console.log(`users`, users);
    return this.usersService.findAll();
  }
}

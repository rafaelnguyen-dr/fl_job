import { Controller, Get, Inject } from '@nestjs/common';
import { UserExchangeKeys } from 'entities';
import { UserExchangeKeysService } from './user-exchange-keys.service';

@Controller()
export class UserExchangeKeysController {
  @Inject()
  private readonly userExchangeKeysService: UserExchangeKeysService;

  @Get('/')
  async findAll(): Promise<any> {
    // const keys = await this.userExchangeKeysService.findExchangeKey();
    return {};
  }
}

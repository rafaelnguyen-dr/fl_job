import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserExchangeKeys, {
  UserExchangeKeysRepository,
} from 'entities/UserExchangeKeys';
import { TExchangeKeyCondition } from 'resources/UserExchangeKeys';

@Injectable()
export class UserExchangeKeysService {
  constructor(
    @InjectRepository(UserExchangeKeysRepository)
    private readonly userExchangeKeysRepository: UserExchangeKeysRepository,
  ) {}

  async findExchangeKey(
    conditions: TExchangeKeyCondition,
  ): Promise<UserExchangeKeys> {
    return this.userExchangeKeysRepository.findOne({
      where: conditions,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBalanceHistoriesRepository } from 'entities/UserBalanceHistories';
import {
  TUserBalanceHistory,
  UserBalanceHistory,
} from 'resources/UserBalanceHistories';

@Injectable()
export class UserBalanceHistoriesService {
  constructor(
    @InjectRepository(UserBalanceHistoriesRepository)
    private readonly userBalanceHistoriesRepository: UserBalanceHistoriesRepository,
  ) {}

  async addToUserBalanceHistories(userBalanceHistories: TUserBalanceHistory) {
    return await this.userBalanceHistoriesRepository.save(userBalanceHistories);
  }

  async findBalanceHistory(condition: any): Promise<UserBalanceHistory | null> {
    return await this.userBalanceHistoriesRepository.findOne(condition);
  }
}

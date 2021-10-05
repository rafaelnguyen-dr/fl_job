import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfitRepository } from 'entities/UserProfit';
import { UserProfit } from 'resources/UserProfit';

@Injectable()
export class UserProfitService {
  constructor(
    @InjectRepository(UserProfitRepository)
    private readonly userProfitRepository: UserProfitRepository,
  ) {}

  async addToUserProfitHistory(userProfitHistory: UserProfit) {
    return await this.userProfitRepository.save(userProfitHistory);
  }

  async findProfitHistory(condition: any): Promise<UserProfit | null> {
    return await this.userProfitRepository.findOne(condition);
  }
}

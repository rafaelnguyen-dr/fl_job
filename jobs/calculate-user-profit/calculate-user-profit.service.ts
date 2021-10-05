import { Inject, Injectable } from '@nestjs/common';

// services
import { UsersService } from 'src/users/users.service';
import { UserProfitService } from 'src/user-profits/user-profit.service';
import { UserExchangeKeysService } from 'src/user-exchange-keys/user-exchange-keys.service';

// types
import { CalculateBalanceService } from 'jobs/calculate-user-balance/calculate-user-balance.service.js';

@Injectable()
export class CalculateUserProfitService {
  @Inject()
  private readonly userService: UsersService;

  @Inject()
  private readonly userExchangeKeyService: UserExchangeKeysService;

  @Inject()
  private readonly userProfitService: UserProfitService;

  @Inject()
  private readonly calculateUserBalanceService: CalculateBalanceService;

  async calculateUsersProfit() {
    // calculate profit by day, month, all time.

    const userBalances =
      await this.calculateUserBalanceService.calculateUsersBalances();

    console.log('userBalances: ', userBalances);
  }
}

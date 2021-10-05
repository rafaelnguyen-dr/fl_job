import { Module } from '@nestjs/common';
import { UserBalanceHistoriesService } from './user-balance-histories.service';

@Module({
  providers: [UserBalanceHistoriesService],
  exports: [UserBalanceHistoriesService],
})
export class UserBalanceHistoriesModule {}

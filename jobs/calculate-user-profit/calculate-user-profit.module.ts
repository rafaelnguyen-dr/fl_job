import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UserProfitModule } from 'src/user-profits/user-profit.module';
import { UserExchangeKeysModule } from 'src/user-exchange-keys/user-exchange-keys.module';

import { CalculateUserProfitService } from './calculate-user-profit.service';

@Module({
  imports: [UsersModule, UserExchangeKeysModule, UserProfitModule],
  providers: [CalculateUserProfitService],
})
export class CalculateUserProfitModule {}

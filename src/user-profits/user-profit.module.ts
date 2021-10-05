import { Module } from '@nestjs/common';
import { UserProfitService } from './user-profit.service';

@Module({
  providers: [UserProfitService],
  exports: [UserProfitService],
})
export class UserProfitModule {}

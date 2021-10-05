import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserBalanceHistoriesModule } from './user-balance-histories/user-balance-histories.module';

@Module({
  imports: [UserBalanceHistoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

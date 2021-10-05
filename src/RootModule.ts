import { Module } from '@nestjs/common';
import { AuthModule } from './auth/AuthModule';
import EntitiesModule from '../entities/EntitiesModule';
import { RouterModule } from 'nest-router';
import routes from './routers';
import { ScheduleModule } from '@nestjs/schedule';

// import { config } from '../config';
import configDatabase from '../config/database';
import { ConfigModule } from '@nestjs/config';
import BcryptModule from './bcrypt/BcryptModule';
import { UsersModule } from './users/users.module';
import { UserOrdersModule } from './user-orders/user-orders.module';
import { UserExchangeKeysModule } from './user-exchange-keys/user-exchange-keys.module';
import { CalculateBalanceModule } from 'jobs/calculate-user-balance/calculate-user-balance.module';
import { UserBalanceHistoriesModule } from './user-balance-histories/user-balance-histories.module';
import { UserProfitModule } from './user-profits/user-profit.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes()),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => configDatabase],
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    BcryptModule,
    EntitiesModule,
    UsersModule,
    UserOrdersModule,
    UserExchangeKeysModule,
    UserBalanceHistoriesModule,
    UserProfitModule,

    // jobs
    CalculateBalanceModule,
  ],
})
export default class RootModule {}

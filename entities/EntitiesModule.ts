import { Global, Module } from '@nestjs/common';
import User, { UserRepository } from './User';
import UserOrders, { UserOrdersRepository } from './UserOrders';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserExchangeKeys, {
  UserExchangeKeysRepository,
} from './UserExchangeKeys';
import UserBalanceHistories, {
  UserBalanceHistoriesRepository,
} from './UserBalanceHistories';
import UserProfit, { UserProfitRepository } from './UserProfit';

const featureImports = TypeOrmModule.forFeature([
  User,
  UserRepository,
  UserOrders,
  UserOrdersRepository,
  UserExchangeKeys,
  UserExchangeKeysRepository,
  UserBalanceHistories,
  UserBalanceHistoriesRepository,
  UserProfit,
  UserProfitRepository,
]);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...require('../../ormconfig'),
      entities: [
        User,
        UserOrders,
        UserExchangeKeys,
        UserBalanceHistories,
        UserProfit,
      ],
      migrations: ['migration/**/*{.ts, .js}'],
      subscribers: ['subscriber/**/*{.ts, .js}'],
    }),
    featureImports,
  ],

  exports: [featureImports],
})
export default class EntitiesModule {}

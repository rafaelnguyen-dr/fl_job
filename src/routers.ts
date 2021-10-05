import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/AuthModule';
import { UserExchangeKeysModule } from './user-exchange-keys/user-exchange-keys.module';

export default () => {
  return [
    { path: '/auth', module: AuthModule },
    {
      path: '/user',
      module: UsersModule,
    },
    {
      path: '/exchanges-keys',
      module: UserExchangeKeysModule,
    },
  ];
};

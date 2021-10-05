import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExchangeKeys } from 'entities';
import { UserExchangeKeysController } from './user-exchange-keys.controller';
import { UserExchangeKeysService } from './user-exchange-keys.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserExchangeKeys])],
  providers: [UserExchangeKeysService],
  exports: [UserExchangeKeysService],
  controllers: [UserExchangeKeysController],
})
export class UserExchangeKeysModule {}

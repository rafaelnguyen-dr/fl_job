import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserOrders from 'entities/UserOrders';
import { UserOrdersService } from './user-orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrders])],
  providers: [UserOrdersService],
  exports: [UserOrdersService],
})
export class UserOrdersModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOrdersRepository } from 'entities/UserOrders';
import { Order } from 'resources';

@Injectable()
export class UserOrdersService {
  constructor(
    @InjectRepository(UserOrdersRepository)
    private readonly userOrderRepository: UserOrdersRepository,
  ) {}

  async findByOrderId(orderId: number): Promise<Order> {
    return this.userOrderRepository.findOne({
      where: { order_id: orderId },
    });
  }

  async saveNewOrder(order: Order): Promise<Order> {
    return this.userOrderRepository.save(order);
  }
}

import { TOrderSide, TOrderStatus, TOrderType } from 'resources/Order';
import {
  Column,
  CreateDateColumn,
  Entity,
  EntityRepository,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order as Definition } from '../resources';
import BaseRepository from './BaseRepository';

@Entity('user_orders')
export default class UserOrders implements Definition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  order_id: number;

  @Column()
  exchange_name: string;

  @Column()
  amount: number;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: ['buy', 'sell'],
    default: 'sell',
  })
  side: TOrderSide;

  @Column({
    type: 'enum',
    enum: ['open', 'closed', 'canceled', 'expired'],
    default: 'open',
  })
  status: TOrderStatus;

  @Column({
    default: 'false',
  })
  is_processed: boolean;

  @Column({
    type: 'enum',
    enum: ['limit', 'market', 'stop_limit', 'stop_market', 'trailing_stop'],
    default: 'limit',
  })
  type: TOrderType;

  @Column()
  symbol: string;

  @Column()
  datetime: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@EntityRepository(UserOrders)
export class UserOrdersRepository extends BaseRepository<UserOrders> {}

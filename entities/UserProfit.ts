import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  EntityRepository,
} from 'typeorm';
import { UserProfit as Definition } from '../resources';
import BaseRepository from './BaseRepository';

@Entity('profits')
export default class UserProfit implements Definition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  exchange_name: string;

  @Column()
  total_value: number;

  @Column()
  currency_unit: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@EntityRepository(UserProfit)
export class UserProfitRepository extends BaseRepository<UserProfit> {}

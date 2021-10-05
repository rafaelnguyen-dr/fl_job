import {
  Column,
  CreateDateColumn,
  Entity,
  EntityRepository,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserExchangeKey as Definition } from '../resources';
import BaseRepository from './BaseRepository';

@Entity('user_exchanges_keys')
export default class UserExchangeKeys implements Definition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  key: string;

  @Column()
  secret_key: string;

  @Column()
  status: boolean;

  @Column()
  exchange: string;

  @Column()
  is_selected: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@EntityRepository(UserExchangeKeys)
export class UserExchangeKeysRepository extends BaseRepository<UserExchangeKeys> {}

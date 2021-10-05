import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  EntityRepository,
} from 'typeorm';
import { User as Definition } from '../resources';
import BaseRepository from './BaseRepository';

@Entity('users')
export default class User implements Definition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  first_name: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column({
    nullable: true,
  })
  email: string;
  // @OneToOne(() => Credentials, (credential) => credential.user, {
  //   nullable: false,
  // })

  @Column({
    nullable: true,
  })
  last_name: string;

  @Column()
  is_leader: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {}

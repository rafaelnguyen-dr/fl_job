import { Credential as Definition } from '../resources';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  EntityRepository,
} from 'typeorm';
import User from './User';
import BaseRepository from './BaseRepository';

@Entity('credential')
export default class Credential implements Definition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToOne(() => User, (user) => user.credential)
  // @JoinColumn()
  // user: User;

  toJSON() {
    return {
      id: this.id,
      username: this.username,
    };
  }
}

@EntityRepository(Credential)
export class CredentialRepository extends BaseRepository<Credential> {}

import { normalize } from 'path';
import { ConnectionOptions } from 'typeorm';
import * as entities from '../entities';

export const databaseConfig = (): ConnectionOptions => ({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production',
  entities: Object.values(entities),
  migrations: [normalize(__dirname + '/../migrations/**/*.{ts,js}')],
  cli: {
    entitiesDir: 'entities',
    migrationsDir: 'migrations',
  },
});

export default databaseConfig();

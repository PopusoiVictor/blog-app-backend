import * as dotenv from 'dotenv';
import { Blog } from './models/Blog';
import { DataSource } from 'typeorm';
import { User } from './models/User';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Blog, User],
  driver: require('mysql2')
});

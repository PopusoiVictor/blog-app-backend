import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import authRoutes from './routes/authRoutes';
import blogRoutes from './routes/blogRoutes';
import { AppDataSource } from './database';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('🌐 Database connection established successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

const appPort = process.env.APP_PORT || 3000;

app.listen(appPort, () => {
  console.log(`🚀 Server is up and running on port ${appPort}!`);
});

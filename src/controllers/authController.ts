import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { User } from '../models/User';
import { generateToken, hashPassword, verifyPassword } from '../utils/authUtils';
import { logger } from '../utils/logger';

const userRepository = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = hashPassword(password);
    const newUser = userRepository.create({ username, password: hashedPassword, role });
    await userRepository.save(newUser);
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    logger.error(error.message, 'Error registering user');
    res.status(400).json({ message: 'Error registering user' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.username = :username', { username })
      .getOne();
      
    if (user && verifyPassword(password, user.password)) {
      const token = generateToken(user.id, user.role);
      res.json({ token, role: user.role });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    logger.error(error.message, 'Error logging in');
    res.status(400).json({ message: 'Error logging in' });
  }
};

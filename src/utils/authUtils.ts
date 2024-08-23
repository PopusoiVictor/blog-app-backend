import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

dotenv.config();

export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const verifyPassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword);
};

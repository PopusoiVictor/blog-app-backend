import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../enums/UserRole';

dotenv.config();

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      req['user'] = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export const authorizeAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = (req as any).user;
  
  if (user && user.role === UserRole.ADMIN) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};

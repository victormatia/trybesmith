import jwt from 'jsonwebtoken';
import { Tdecoded, Tuser } from '../types';

const secret: string = process.env.JWT_SECRET || 'my-secret';

export const createToken = (user: Tuser): string => {
  const { username, id } = user;
  const userNoPass = { id, username };
  
  const token = jwt.sign(userNoPass, secret, { expiresIn: '1d', algorithm: 'HS256' });

  return token;
};

export const verifyToken = (token: string): Tdecoded => {
  const decoded = jwt.verify(token, secret);

  return decoded as Tdecoded;
}; 

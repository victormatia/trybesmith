import jwt from 'jsonwebtoken';
import { Tuser } from '../types';

const secret: string = process.env.JWT_SECRET || 'my-secret';

const createToken = (user: Tuser): string => {
  const { username, vocation, level } = user;
  const userNoPass = { username, vocation, level };
  const token = jwt.sign(userNoPass, secret, { expiresIn: '1d', algorithm: 'HS256' });

  return token;
};

export default createToken;

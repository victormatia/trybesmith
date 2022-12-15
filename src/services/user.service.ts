import createToken from '../auth/jwt';
import postUser from '../models/user.model';
import { Tuser } from '../types';

export const postUserService = async (user: Tuser): Promise<{ token: string }> => {
  const token = createToken(user);

  await postUser(user);

  return { token };
};

export const arrow = () => {};

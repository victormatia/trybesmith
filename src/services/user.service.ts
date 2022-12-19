import createToken from '../auth/jwt';
import { getUserByName, postUser } from '../models/user.model';
import { Tuser } from '../types';

export const postUserService = async (user: Tuser): Promise<{ token: string }> => {
  const token = createToken(user);

  await postUser(user);

  return { token };
};

const getUserByUserNameService = async (username: string): Promise<Tuser> => {
  const user = await getUserByName(username);

  return user;
};

export const loginService = async (username: string, password: string)
: Promise<{ token?: string, message?: string }> => {
  const user = await getUserByUserNameService(username);

  if (!user || user.password !== password) {
    return { message: 'Username or password invalid' };
  }

  const payload = {
    id: user.id,
    username,
  };

  return { token: createToken(payload) };
};

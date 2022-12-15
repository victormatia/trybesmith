import { Request, Response } from 'express';
import { postUserService } from '../services/user.service';

export const postUserController = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;

  const { token } = await postUserService(body);

  return res.status(201).json({ token });
};

export const arrow = () => {};

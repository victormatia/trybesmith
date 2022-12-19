import { Request, Response } from 'express';
import { loginService, postUserService } from '../services/user.service';

export const postUserController = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;

  const { token } = await postUserService(body);

  return res.status(201).json({ token });
};

export const loginController = async (req: Request, response: Response): Promise<Response> => {
  const { username, password } = req.body;
  const { token, message } = await loginService(username, password);

  if (message) return response.status(401).json({ message });

  return response.status(200).json({ token });
};

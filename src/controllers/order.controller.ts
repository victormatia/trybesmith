import { Request, Response } from 'express';
import { getAllOrdersService, postOderService } from '../services/order.service';

export const getAllOrdersController = async (_req: Request, res: Response): Promise<Response> => {
  const { result } = await getAllOrdersService();

  return res.status(200).json(result);
};

export const postOrderController = async (req: Request, res: Response): Promise<Response> => {
  const { productsIds } = req.body;
  const { authorization } = req.headers;

  const { result, message } = await postOderService(productsIds, authorization);

  if (message) return res.status(401).json({ message });

  return res.status(201).json(result);
};

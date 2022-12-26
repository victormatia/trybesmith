import { Request, Response } from 'express';
import { getAllOrdersService, postOderService } from '../services/order.service';

export const getAllOrdersController = async (_req: Request, res: Response): Promise<Response> => {
  const { result } = await getAllOrdersService();

  return res.status(200).json(result);
};

export const postOrderController = async (req: Request, res: Response): Promise<Response> => {
  const { productsIds } = req.body;
  const { userId } = req.body;

  const { result } = await postOderService(productsIds, Number(userId));

  return res.status(201).json(result);
};

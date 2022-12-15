import { Request, Response } from 'express';
import getAllOrdersService from '../services/order.service';

const getAllOrdersController = async (_req: Request, res: Response): Promise<Response> => {
  const { result } = await getAllOrdersService();

  return res.status(200).json(result);
};

export default getAllOrdersController;

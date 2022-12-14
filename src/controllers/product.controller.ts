import { Request, Response } from 'express';
import { postProductService, getAllProductsService } from '../services/product.service';

export const postProductController = async (req: Request, res: Response) => {
  const { body } = req;
  const { result } = await postProductService(body);

  return res.status(201).json(result);
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const { result } = await getAllProductsService();

  return res.status(200).json(result);
};

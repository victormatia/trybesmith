import { Request, Response } from 'express';
import postProductService from '../services/product.service';

const postProductController = async (req: Request, res: Response) => {
  const { body } = req;
  const { result } = await postProductService(body);

  return res.status(201).json(result);
};

export default postProductController;

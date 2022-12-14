import express from 'express';
import { postProductController,
  getAllProductsController } from '../controllers/product.controller';

const route = express.Router();

route.post('/products', postProductController);
route.get('/products', getAllProductsController);

export default route;

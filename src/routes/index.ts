import express from 'express';
import { postProductController,
  getAllProductsController } from '../controllers/product.controller';
import { postUserController } from '../controllers/user.controller';

const route = express.Router();

// product routes
route.post('/products', postProductController);
route.get('/products', getAllProductsController);

// user routes
route.post('/users', postUserController);

export default route;

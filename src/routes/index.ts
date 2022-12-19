import express from 'express';
import getAllOrdersController from '../controllers/order.controller';
import { postProductController,
  getAllProductsController } from '../controllers/product.controller';
import { loginController, postUserController } from '../controllers/user.controller';
import verifyField from '../middlewares';

const route = express.Router();

// product routes
route.post('/products', postProductController);
route.get('/products', getAllProductsController);

// user routes
route.post('/users', postUserController);
route.post('/login', verifyField, loginController);

// order routes
route.get('/orders', getAllOrdersController);

export default route;

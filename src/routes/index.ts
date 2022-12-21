import express from 'express';
import getAllOrdersController from '../controllers/order.controller';
import { postProductController,
  getAllProductsController } from '../controllers/product.controller';
import { loginController, postUserController } from '../controllers/user.controller';
import {
  checksAmountField,
  checksLevelField,
  checksLoginRequestFields,
  checksNameField,
  checksPasswordField,
  checksUserNameField,
  checksVocationField,
} from '../middlewares';

const route = express.Router();

// product routes
route.post('/products', checksNameField, checksAmountField, postProductController);
route.get('/products', getAllProductsController);

// user routes
route.post(
  '/users',
  checksUserNameField,
  checksVocationField,
  checksLevelField,
  checksPasswordField,
  postUserController,
);
route.post('/login', checksLoginRequestFields, loginController);

// order routes
route.get('/orders', getAllOrdersController);

export default route;

import express from 'express';
import { getAllOrdersController, postOrderController } from '../controllers/order.controller';
import { postProductController,
  getAllProductsController } from '../controllers/product.controller';
import { loginController, postUserController } from '../controllers/user.controller';
import {
  checksAmountField,
  checksLevelField,
  checksLoginRequestFields,
  checksNameField,
  checksPasswordField,
  checksProductsIdsField,
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
route.post('/orders', checksProductsIdsField, postOrderController);

export default route;

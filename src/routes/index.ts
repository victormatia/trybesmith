import express from 'express';
import postProductController from '../controllers/product.controller';

const route = express.Router();

route.post('/products', postProductController);

export default route;

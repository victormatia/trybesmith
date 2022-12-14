import express from 'express';
import routes from './controllers/product.controller';

const app = express();

app.use(express.json());

app.use('/', routes);

export default app;

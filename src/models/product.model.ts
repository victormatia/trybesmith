import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TProduct } from '../types';

const postProducts = async (product: TProduct): Promise<number> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return insertId;
};

export default postProducts;

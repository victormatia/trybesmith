import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { TProduct } from '../types';

export const postProducts = async (product: TProduct): Promise<number> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return insertId;
};

export const getAllProducts = async (): Promise<RowDataPacket[] & TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products');

  return products;
};

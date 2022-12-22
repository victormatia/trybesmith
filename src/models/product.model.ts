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

export const updateProduct = async (productId: number, orderId: number): Promise<number> => {
  const [{ affectedRows }] = await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;',
    [orderId, productId],
  );

  return affectedRows;
};

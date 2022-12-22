import { RowDataPacket, ResultSetHeader } from 'mysql2';
// import { Torder } from '../types';
import connection from './connection';

export const getAllOrders = async (): Promise<RowDataPacket[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id, JSON_ARRAYAGG(p.id) AS products_id FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id;`,
  );

  return result;
};

export const postOrder = async (userId: number): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?);',
    [userId],
  );
  
  return insertId;
};

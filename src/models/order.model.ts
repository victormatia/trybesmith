import { RowDataPacket } from 'mysql2';
// import { Torder } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<RowDataPacket[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id, JSON_ARRAYAGG(p.id) AS products_id FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id;`,
  );

  console.log(result);

  return result;
};

export default getAllOrders;

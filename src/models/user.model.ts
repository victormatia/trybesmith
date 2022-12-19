import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Tuser } from '../types';

export const postUser = async (user: Tuser): Promise<number> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return insertId;
};

export const getUserByName = async (username: string): Promise<Tuser> => {
  const [[user]] = await connection.execute<RowDataPacket[] & Tuser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );

  return user;
};

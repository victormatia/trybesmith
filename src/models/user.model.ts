import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Tuser } from '../types';

const postUser = async (user: Tuser): Promise<number> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return insertId;
};

export default postUser;

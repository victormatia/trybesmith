import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYQSL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;

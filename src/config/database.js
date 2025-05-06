// config/database.js
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME_DB, 
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const db = {
  query: (sql, params) =>
    new Promise((resolve, reject) => {
      pool.query(sql, params, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    }),
};

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
  connection.release();
});

export default db;

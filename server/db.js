const mysql = require('mysql2');
const db = mysql.createConnection({
  host: "127.0.0.1",
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'test'
})

db.connect();

module.exports = db;
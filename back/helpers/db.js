const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'soulnotfound',
  database: 'homer_odyssey'
});

module.exports = connection;

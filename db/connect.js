//connent to database
const mysql = require('mysql2');

//security
require('dotenv').config();
let pw = process.env.pw;
let database = process.env.database;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${pw}`,
    database: `${database}`
  },
  console.log(`Connected to the ${database} database.`)
);

module.exports = db;
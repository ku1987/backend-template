require('dotenv').config();

const userName = process.env.USER_NAME;
const passWord = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const host = process.env.DB_HOST;

const config = {
  port: 3003,
  db: {
    client: 'pg',
    userName,
    passWord,
    host,
    dbName,
    port: 5432,
  },
};

module.exports = config;

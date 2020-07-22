require('dotenv').config();

const userName: string = process.env.USER_NAME;
const passWord: string = process.env.DB_PASSWORD;
const dbName: string = process.env.DB_NAME;
const host: string = process.env.DB_HOST;

interface DBObject {
  client: string,
  userName: string,
  passWord: string,
  host: string,
  dbName: string,
  port: number,
}

export interface ConfigObject {
  port: number;
  db: DBObject;
}

const config: ConfigObject = {
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

export default config;

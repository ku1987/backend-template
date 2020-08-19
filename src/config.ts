require('dotenv').config();

const userName = process.env.USER_NAME!;
const passWord = process.env.DB_PASSWORD!;
const dbName = process.env.DB_NAME!;
const host = process.env.DB_HOST!;

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

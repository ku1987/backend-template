import path from 'path';

import config from './config';

const dbFilesBasePath = path.join(__dirname, 'db');

export default {
  client: config.db.client,
  connection: {
    host: config.db.host,
    user: config.db.userName,
    password: config.db.passWord,
    database: config.db.dbName,
  },
  migrations: {
    directory: path.join(dbFilesBasePath, 'migrations'),
  },
  seeds: {
    directory: path.join(dbFilesBasePath, 'seeds'),
  },
};

const path = require('path');

const config = require('./config.js');

const dbFilesBasePath = path.join(__dirname, 'db');

module.exports = {
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

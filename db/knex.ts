import knex from 'knex';

import config from '../config';
import dbConfig from '../knexfile';

const { host, dbName } = config.db;

console.log(`Connecting to database ${dbName} at ${host}.`);
const dbConnection = knex(dbConfig);

export default dbConnection;

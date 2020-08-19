import knex from 'knex';

import config from '../src/config';
import dbConfig from '../src/knexfile';

const { host, dbName } = config.db;

console.log(`Connecting to database ${dbName} at ${host}.`);
const dbConnection: any = knex(dbConfig);

export default dbConnection;

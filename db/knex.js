const knex = require('knex');

const config = require('../config');
const dbConfig = require('../knexfile');

const { host, dbName } = config.db;

console.log(`Connecting to database ${dbName} at ${host}.`);
const dbConnection = knex(dbConfig);

module.exports = dbConnection;

import knex from 'knex';

import dbConfig from './knexfile';

const dbConnection = knex(dbConfig);

(async () => {
  try {
    await dbConnection.migrate.latest();
    console.log('Database has been migrated.');
    await dbConnection.destroy();
  } catch (error) {
    console.error('Failed to migrate.');
    console.error(error);
  }
})();

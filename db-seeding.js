const knex = require('knex');

const dbConfig = require('./knexfile');

const dbConnection = knex(dbConfig);

const dbSeed = async () => {
  try {
    await dbConnection.seed.run();
    console.log('Database seeding completed.');
    dbConnection.destroy();
  } catch (error) {
    console.error('Database seeding failed.');
    console.error(error);
  }
};
dbSeed();

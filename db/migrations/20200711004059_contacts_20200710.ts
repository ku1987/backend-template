exports.up = (knex) => knex.schema.createTable('contacts', (table) => {
  table.increments();
  table.string('contactId').notNullable().unique();
  table.string('name').notNullable();
  table.string('mail').notNullable();
  table.string('content').notNullable();
  table.integer('createdAt').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('contacts');

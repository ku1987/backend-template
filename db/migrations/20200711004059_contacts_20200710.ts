exports.up = (knex: any) => knex.schema.createTable('contacts', (table: any) => {
  table.increments();
  table.string('contactId').notNullable().unique();
  table.string('name').notNullable();
  table.string('mail').notNullable();
  table.string('content').notNullable();
  table.integer('createdAt').notNullable();
});

exports.down = (knex: any) => knex.schema.dropTable('contacts');

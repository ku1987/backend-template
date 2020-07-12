const TABLES = require('../tables');

exports.seed = (knex) => knex(TABLES.CONTACTS).del()
  .then(() => knex(TABLES.CONTACTS).insert([
    {
      contactId: 'test-contact-id-1',
      name: 'Test-Contact-1',
      mail: 'test-contact-1@sample.com',
      content: 'Test for contact 1.',
      createdAt: 1594439312,
    },
    {
      contactId: 'test-contact-id-2',
      name: 'Test-Contact-2',
      mail: 'test-contact-2@sample.com',
      content: 'Test for contact 2.',
      createdAt: 1594439313,
    },
    {
      contactId: 'test-contact-id-3',
      name: 'Test-Contact-3',
      mail: 'test-contact-3@sample.com',
      content: 'Test for contact 3.',
      createdAt: 1594439314,
    },
  ]));

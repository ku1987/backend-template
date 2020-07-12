const knex = require('../knex');
const TABLES = require('../tables');

const getAllContacts = async () => {
  const contacts = await knex(TABLES.CONTACTS);
  if (contacts.length === 0) {
    return null;
  }
  return contacts;
};

const getSingleContact = async (filter) => {
  const contact = await knex(TABLES.CONTACTS)
    .where(filter);
  if (contact.length !== 1) {
    return null;
  }
  return contact[0];
};

const addContact = async (data) => {
  await knex(TABLES.CONTACTS)
    .insert(data);
  return data;
};

module.exports = {
  getAllContacts,
  getSingleContact,
  addContact,
};

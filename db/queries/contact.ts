import knex from '../knex';
import TABLES from '../tables';

interface Contact {
  contactId: string,
  name: string,
  mail: string,
  content: string,
  createdAt: number,
}

/**
 * @returns {Contact[]} Array of contracts.
 */
const getAllContacts = async () => {
  const contacts: Contact[] = await knex(TABLES.CONTACTS);
  if (contacts.length === 0) {
    return null;
  }
  return contacts;
};

const getSingleContact = async (filter: any) => {
  const contact: Contact[] = await knex(TABLES.CONTACTS)
    .where(filter);
  if (contact.length !== 1) {
    return null;
  }
  return contact[0];
};

const addContact = async (data: any) => {
  await knex(TABLES.CONTACTS)
    .insert(data);
  return data;
};

export default {
  getAllContacts,
  getSingleContact,
  addContact,
};

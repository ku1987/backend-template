const Router = require('koa-router');
const { uuid } = require('uuidv4');
const contactsQuery = require('../db/queries/contact');
const common = require('./common');

const router = new Router();

router.get('/contacts', async (ctx) => {
  try {
    const contacts = await contactsQuery.getAllContacts();
    if (!contacts) {
      common.handleError(ctx, 404, 'Contacts not found.');
      return;
    }
    ctx.body = {
      status: 'success',
      data: {
        contacts,
      },
    };
  } catch (error) {
    common.handleInternalError(ctx);
  }
});

router.get('/contacts/contact-id/:id', async (ctx) => {
  const contactId = ctx.params.id;
  try {
    const contact = await contactsQuery.getSingleContact({ contactId });
    if (!contact) {
      common.handleError(ctx, 404, 'Contact of this ID not found.');
      return;
    }
    ctx.body = {
      status: 'success',
      data: {
        contact,
      },
    };
  } catch (error) {
    common.handleInternalError(ctx);
  }
});

router.post('/contacts', async (ctx) => {
  const contactId = uuid();
  const { name, mail, content } = ctx.request.body;
  try {
    // TODO contactId validation
    const createdAt = Math.floor(Date.now() / 1000);
    const record = {
      contactId,
      name,
      mail,
      content,
      createdAt,
    };
    const data = await contactsQuery.addContact(record);
    ctx.body = {
      status: 'success',
      data,
    };
  } catch (error) {
    common.handleInternalError(ctx);
  }
});

module.exports = router;

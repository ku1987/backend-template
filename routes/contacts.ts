import Router from 'koa-router';
import { v4 } from 'uuid';
import contactsQuery from '../db/queries/contact';
import common from './common';

const router = new Router();

router.get('/contacts', async (ctx: any) => {
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

router.get('/contacts/contact-id/:id', async (ctx: any) => {
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

router.post('/contacts', async (ctx: any) => {
  const contactId = v4();
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

export default router;

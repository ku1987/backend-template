import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compression from 'compression';
import koaConnect from 'connect';
import koaBunyanLogger from 'koa-bunyan-logger';

// const serve = require('koa-static');
import json from 'koa-json';
// const path = require('path');
import cors from 'cors';

import indexRouter from '../routes/index';
import worksRouter from '../routes/works';
import contactsRouter from '../routes/contacts';

import config from './config';

const { port } = config;
const app = new Koa();

app.use(koaBunyanLogger());

app.use((ctx: any, next: any) => {
  ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
  return next();
});

app.use(json());
app.use(bodyParser());
app.use(indexRouter.routes());
app.use(worksRouter.routes());
app.use(contactsRouter.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compression = require('compression');
const koaConnect = require('koa-connect');
const koaBunyanLogger = require('koa-bunyan-logger');

// const serve = require('koa-static');
const json = require('koa-json');
// const path = require('path');
const cors = require('@koa/cors');

const indexRouter = require('./routes/index');
const worksRouter = require('./routes/works');
const contactsRouter = require('./routes/contacts');

const config = require('./config');

const { port } = config;
const app = new Koa();

app.use(koaBunyanLogger());

app.use((ctx, next) => {
  ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
  return next();
});

app.use(koaConnect(compression()));
app.use(json());
app.use(cors());
app.use(bodyParser());
app.use(indexRouter.routes());
app.use(worksRouter.routes());
app.use(contactsRouter.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

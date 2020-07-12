const Router = require('koa-router');
const works = require('../public/works');

const router = new Router();

router.get('/works', async (ctx) => {
  ctx.body = {
    works,
  };
});

router.get('/work/:id', async (ctx) => {
  const workId = Number(ctx.params.id);
  const targetWork = works.find((work) => work.id === workId);
  if (!targetWork) {
    ctx.response.status = 404;
    ctx.body = {
      status: 'failure',
      data: {
        message: 'Not found',
      },
    };
    return;
  }
  const work = targetWork;
  ctx.body = {
    work,
  };
});

module.exports = router;

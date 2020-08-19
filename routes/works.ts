import Router from 'koa-router';
import works from '../public/works';

const router = new Router();

router.get('/works', async (ctx: any) => {
  ctx.body = {
    works,
  };
});

router.get('/work/:id', async (ctx: any) => {
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

export default router;

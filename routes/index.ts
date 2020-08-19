import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx: any) => {
  ctx.body = { msg: 'accessed to Home' };
});
router.get('/health', async (ctx: any) => {
  ctx.body = { msg: 'OK.' };
});

export default router;

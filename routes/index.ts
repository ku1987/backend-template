import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = { msg: 'accessed to Home' };
});
router.get('/health', async (ctx) => {
  ctx.body = { msg: 'OK.' };
});

module.exports = router;

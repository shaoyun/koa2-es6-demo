const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

const router  = require('koa-router')();

router.get('/:category/:title', function (ctx, next) {
    console.log(ctx.params);
});

router.get('/shaoyun', function (ctx, next) {
    console.log(ctx.query);
    ctx.body =  '123';
});

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(5000);
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

const app = new  Koa();
app.use(bodyParser());
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    await next();
});

app.use(ctx => {
    ctx.set('Content-Type','text/html');
    ctx.body = '<h3>Not Found</h3>';
    ctx.status = 404;
})

app.listen(5000, () => {
    console.log(`Application running on port 5000`)
});
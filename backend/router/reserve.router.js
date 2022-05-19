import Router from '@koa/router'
import {getAll, save, getById, update, deletePost} from '../api/reserve.api.js'


const reserveRouter = new Router({
    prefix: '/reserve'
});

reserveRouter.post('/', async (ctx) => {
    const data = ctx.request.body;
    const post = await save(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

reserveRouter.get('/', async (ctx) => {
    ctx.body = await getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

reserveRouter.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getById(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

reserveRouter.put('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await update(id, ctx.request.body);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

reserveRouter.delete('/:id', async (ctx) => {
    const id = ctx.params.id;
    await deletePost(id);
    ctx.status = 204;
})

export default reserveRouter;

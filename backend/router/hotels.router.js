import Router from '@koa/router'
import {getAll, save, getById, update, deletePost, getByUser} from '../api/hotels.api.js'


const hotelsRouter = new Router({
    prefix: '/hotels'
});

hotelsRouter.post('/', async (ctx) => {
    const data = ctx.request.body;
    const post = await save(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

hotelsRouter.get('/', async (ctx) => {
    ctx.body = await getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

hotelsRouter.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getById(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

hotelsRouter.get('/user/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getByUser(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

hotelsRouter.put('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

hotelsRouter.delete('/:id', (ctx) => {
    const id = ctx.params.id;
    deletePost(id);
    ctx.status = 204;
})

export default hotelsRouter;

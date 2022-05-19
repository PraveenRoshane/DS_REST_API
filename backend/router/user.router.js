import Router from '@koa/router'
import {save, getById, verifyUser} from '../api/user.api.js'


const userRouter = new Router({
    prefix: '/user'
});

userRouter.post('/', async (ctx) => {
    const data = ctx.request.body;
    const post = await save(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

// hotelsRouter.get('/', async (ctx) => {
//     ctx.body = await getAll();
//     ctx.set('Content-Type', 'application.json');
//     ctx.status = 200;
// })

userRouter.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getById(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

userRouter.post('/verify', async (ctx) => {
    const data = ctx.request.body;
    ctx.body = await verifyUser(data);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

// hotelsRouter.put('/:id', (ctx) => {
//     const id = ctx.params.id;
//     ctx.body = update(id, ctx.request.body);
//     ctx.set('Content-Type', 'application.json');
//     ctx.status = 200;
// })
//
// hotelsRouter.delete('/:id', (ctx) => {
//     const id = ctx.params.id;
//     deletePost(id);
//     ctx.status = 204;
// })

export default userRouter;

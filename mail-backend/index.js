const Koa = require('koa')
const koaRouter = require('koa-router')
const koaBodyparser = require('koa-bodyparser')
const json = require('koa-json')
const sendmail = require('./API/sendmail.js')

const app = new Koa()
const router = new koaRouter()

app.use(json())
app.use(koaBodyparser())

router.post('/sendmail', (ctx, next) => {
    const data = ctx.request.body
    ctx.body = sendmail(data)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3003, () => {
    console.log('server starrted on 3003!')
})

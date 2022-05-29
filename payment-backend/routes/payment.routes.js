import koaRouter from 'koa-router'
import Payment from '../models/payment.model.js'

const router = new koaRouter()

export default router.post('/payment', (ctx, next) => {
    const data = ctx.request.body

    const paymentDetails = new Payment({
        crdHolderName : data.crdHolderName,
        crdNumber : data.crdNumber,
        exp_date : data.exp_date,
        cvc : data.cvc
    })

    console.log(data)

    paymentDetails.save().then((result) => {
        console.log(result)
        ctx.body = "result"
    }).catch((err) => {
        console.log(err.message)
    });
})
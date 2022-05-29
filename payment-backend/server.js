import 'dotenv/config'
import Koa from 'koa'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import cors from "@koa/cors";
import { connect } from './utils/db.connection.js'
import paymentRoutes from './routes/payment.routes.js'

const app = new Koa()

app.use(json())
app.use(bodyParser())
app.use(cors())

app.use(paymentRoutes.routes()).use(paymentRoutes.allowedMethods())

app.listen(3004, () => {
    console.log("Server Started on port : 3004")
    connect()
})
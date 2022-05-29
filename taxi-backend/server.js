const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const taxiRoutes = require('./routes/taxiBooking.routes')

const PORT = process.env.PORT || 8095

app.use(cors());
app.use(bodyParser.json());

app.use('/customer', taxiRoutes)

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb connection successful!")
})

app.listen(PORT, ()=> {
    console.log(`Server is up and running on: ${PORT}`)
})
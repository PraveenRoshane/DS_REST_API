import mongoose from "mongoose";
//const mongoose = require('mongoose');
//import { connexionString } from './conf/app-config';
const initDB = () => {
    mongoose.connect('mongodb+srv://Praveen:praveen123@library-cluster.t3yey.mongodb.net/library-db?retryWrites=true&w=majority');
    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

    mongoose.connection.on('error', console.error);
}
//module.exports = initDB;

export default initDB;
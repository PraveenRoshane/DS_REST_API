const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taxiSchema = new Schema({

    username : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required :true
    },

    email : {
        type : String,
        required :true
    }
})

const Taxi = mongoose.model("TaxiBooking", taxiSchema);

module.exports = Taxi;
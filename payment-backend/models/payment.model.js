import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    crdHolderName : {
        type : String,
        required : true
    },
    crdNumber : {
        length: 16,
        type : Number,
        required :true
    },
    exp_date :{
        type: String,
        required: true
    },
    cvc : {
        length: 3,
        type : Number,
        required :true
    }

})

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
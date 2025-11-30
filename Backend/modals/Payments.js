const mongoose = require("mongoose");

const payment = new mongoose.Schema({
    razorpay_payment_id:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        required:true
    },
    teamName:{
        type:String,
        required:true
    },
    teamCode:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    coupnCode:{
        type:String,
    },
    createdAt: {
        type: String,
        required: true
    },
    secondinstallment: {
        type: Number,
        required: false
    }
})


module.exports = mongoose.model('paymentschemas',payment);
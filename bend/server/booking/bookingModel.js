const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    package: {type:String, default:null},
    price: {type:String, default:null},
    accountHolder:{type:String, default:null},
    accountNumber:{type:String, default:null},
    cvv:{type:String, default:null},
    paymentMode:{type:String, default:null},
    status: {type:String, default:'pending'},
    createAt: {type:Date, default:Date.now()},
});

module.exports = mongoose.model('booking', bookingSchema);
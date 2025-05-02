const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "item", default: null },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer", default: null },
    accountHolderName: { type: String, default: null },
    accountNumber: { type: String, default: null },
    paymentMode: { type: String, default: null },
    cvv: { type: String, default: null },
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = new mongoose.model("booking", bookingSchema)
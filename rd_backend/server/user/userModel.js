const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("user", userSchema)
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    userType: { type: String, default: 2 },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("user", userSchema)
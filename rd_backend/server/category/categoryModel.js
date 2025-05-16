const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    categoryName: { type: String, default: true },
    description: { type: String, default: true },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("category", categorySchema)
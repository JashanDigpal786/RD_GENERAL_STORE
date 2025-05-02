const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    categoryName: { type: String, default: null },
    description: { type: String, default: null },

    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("category", categorySchema)
const mongoose = require("mongoose")

const subcategorySchema = mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },
    thumbnail: { type: String, default: 'no_image.jpeg' },
    subcategoryName: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("subcategory", subcategorySchema)
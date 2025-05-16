const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
   subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "subcategory", default: null },
   itemName: { type: String, default: null },
   itemPrice: { type: String, default: null },
   itemDes: { type: String, default: null },
   itemshippingCharge: { type: String, default: null },
   thumbnail: { type: String, default: 'no_image.jpeg' },
   status: { type: Boolean, default: true },
   createdAt: { type: Date, default: Date.now() }
})

module.exports = new mongoose.model("item", itemSchema)
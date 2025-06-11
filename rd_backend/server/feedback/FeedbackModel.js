const mongoose = require('mongoose')
const feedbackSchema = mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    review: { type: String, default: null },
    suggestion: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})
module.exports = new mongoose.model('feedback', feedbackSchema)
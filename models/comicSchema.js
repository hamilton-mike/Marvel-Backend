const mongoose = require('mongoose');

const comicSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    creator: {
        name: { type: String },
        role: { type: String }
    }
}, { timestamps: true })

module.exports = mongoose.model('Comic', comicSchema)

const mongoose = require('mongoose');

const comicSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: [Number],
    creators: {
        name: { type: String },
        role: { type: String }
    }
})

module.exports = mongoose.model('Comic', comicSchema)
const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
})

module.exports = mongoose.model('Hero', heroSchema)

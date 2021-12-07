const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    team: { type: mongoose.Types.ObjectId, ref: "Team"}
})

module.exports = mongoose.model('Hero', heroSchema)

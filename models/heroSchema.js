const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    marvel: {type: Number },
    comics: { type: Number },
    events: { type: Number },
    stories: { type: Number },
    thumbnail: { type: String },
    team: { type: mongoose.Types.ObjectId, ref: "Team"}
})

module.exports = mongoose.model('Hero', heroSchema)

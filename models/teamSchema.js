const mongoose = require('mongoose');
const string = { type: String };

const teamSchema = mongoose.Schema({
    title: { type: String, require: true },
    hero: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hero" }]
})

module.exports = mongoose.model('Team', teamSchema)

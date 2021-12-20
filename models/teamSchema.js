const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    title: { type: String, require: true }
})

module.exports = mongoose.model('Team', teamSchema)

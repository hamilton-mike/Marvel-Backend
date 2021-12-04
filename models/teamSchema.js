const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    team_Name: { type: String, require: true },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hero"
    }]
})

module.exports = mongoose.model('Team', teamSchema)

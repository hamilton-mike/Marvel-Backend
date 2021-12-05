const mongoose = require('mongoose');
const string = { type: String };

const teamSchema = mongoose.Schema({
    title: { type: String, require: true },
    leader: string,
    captain: string,
    tank: string,
    healer: string,
    brawler: string,
    sniper: string,
    support: string
})

module.exports = mongoose.model('Team', teamSchema)
